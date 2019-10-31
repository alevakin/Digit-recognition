import tensorflowjs as tfjs
import tensorflow as tf 

model = tf.keras.models.load_model('my_model.h5')
tfjs.converters.save_keras_model(model, '../digit-drawing-app/js')