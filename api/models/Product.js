const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  attributes: [
    {
      price: {
        type: Number,
        required: true
      },
      imageUrl: {
        type: String
      },
      size: {
        type: String,
        require: true
      },
      color: {
        type: String,
        required: true
      }
    }
  ]
});

mongoose.model('Product', productSchema);
