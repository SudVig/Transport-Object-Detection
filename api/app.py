import cv2
from flask import Flask, request, Response
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/process_image', methods=['POST'])
def process_image():

    img = request.files['image'].read()
    npimg = np.fromstring(img, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    trainedDataset=cv2.CascadeClassifier('api\car.xml')

    gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY) 
    cars=trainedDataset.detectMultiScale(gray)

    for x,y,w,h in cars:
        cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)
        cv2.putText(img, 'Car', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)

    _, img_encoded = cv2.imencode('.jpg', img)
    response = img_encoded.tostring()

    # return Response(response={"hi":"hello"}, status=200)
  
    return Response(response=response, status=200, mimetype='image/jpeg')
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
