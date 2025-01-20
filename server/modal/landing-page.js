const mongoose = require("mongoose");

const LandingPageSchema = new mongoose.Schema({
  landingPageName: {
    type: String,
    required: true,
    trim: true,
  },
  logo: {
    type: String,
    required: false,
    trim: true,
  },
  headerItems: {
    type: [String],
    required: false,
    trim: true,
  },
  bannerImages: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
  bannerBox: {
    heading: {
      type: String,
      trim: true,
      required: false,
    },
    description: {
      type: String,
      trim: true,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    priceViewHeading: {
      type: String,
      trim: true,
      required: false,
    },
    keypoint: {
      type: [String],
      required: false,
    },
  },
  projectInformation: {
    heading: {
      type: String,
      trim: true,
      required: false,
    },
    title: {
      type: String,
      trim: true,
      required: false,
    },
    keypoint: {
      type: [String],
      required: false,
    },
  },
  projectOverview: {
    heading: {
      type: String,
      trim: true,
      required: false,
    },
    title: {
      type: String,
      trim: true,
      required: false,
    },
    description: {
      type: String,
      trim: true,
      required: false,
    },
  },
  gallery: [
    {
      image: {
        type: String,
        required: false,
      },
    },
  ],
  amenities: [
    {
      name: {
        type: String,
        required: false,
        trim: true,
      },
      image: {
        type: String,
        required: false,
        trim: true,
      },
    },
  ],
  locationAdvantage: {
    image: {
      type: String,
      trim: true,
      required: false,
    },
    title: {
      type: String,
      trim: true,
      required: false,
    },
    paragraph: {
      type: String,
      trim: true,
      required: false,
    },
    list: {
      type: [String],
      required: false,
    },
  },
  aboutProject: {
    title: {
      type: String,
      trim: true,
      required: false,
    },
    description: {
      type: String,
      trim: true,
      required: false,
    },
  },
  floorPlan: [
    {
      image: {
        type: String,
        trim: true,
        required: false,
      },
    },
  ],
  brochureContent: {
    icon: {
      type: String,
      trim: true,
      required: false,
    },
    paragraph: {
      type: String,
      trim: true,
      required: false,
    },
  },
  playmentPlan: [
    {
      heading: {
        type: String,
        trim: true,
        required: false,
      },
      size: {
        type: String,
        trim: true,
        required: false,
      },
      price: {
        type: String,
        trim: true,
        required: false,
      },
    },
  ],
  imageForVideo: {
    type: String,
    trim: true,
    required: false,
  },
  priceTable: [
    {
      name: {
        type: String,
        required: false,
        trim: true,
      },
      areaSize: {
        type: String,
        required: false,
        trim: true,
      },
      price: {
        type: String,
        required: false,
        trim: true,
      },
    },
  ],
  map: {
    type: String,
    trim: true,
    required: false,
  },
  footerContent: {
    type: String,
    trim: true,
    required: false,
  },
  qrCode: [
    {
      image: {
        type: String,
        trim: true,
        required: false,
      },
    },
  ],
  privacyPolicy: {
    type: String,
    trim: true,
    required: false,
  },
  themeColor: {
    type: String,
    trim: true,
    required: false,
  },
  primaryColor: {
    type: String,
    trim: true,
    required: false,
  },
  secondaryColor: {
    type: String,
    trim: true,
    required: false,
  },
});

module.exports = mongoose.model("LandingPage", LandingPageSchema);
