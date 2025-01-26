const landingPage = require("../modal/landing-page");
const qs = require("qs");

const getLandingPage = async (req, res) => {
  try {
    const getLandingPagesData = await landingPage.find({});
    if (getLandingPagesData.length > 0) {
      return res.status(200).json({
        data: getLandingPagesData.reverse(),
        message: "landing page fetched successfully",
      });
    } else {
      return res.status(400).json({
        data: [],
        message: "no found data",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something is wrong!",
    });
  }
};

const getSingleLandingPage = async (req, res) => {
  try {
    const singlePageId = req.params.id;
    if (!singlePageId) {
      res.status(400).json({
        message: "Please enter correct Id",
      });
    }
    const singlePageData = await landingPage.findById(singlePageId);

    res.status(200).json({
      success: true,
      data: singlePageData,
      message: "single landing page data fetched",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

const addLandingPage = async (req, res) => {
  try {
    const { landingPageName, themeColor, primaryColor, secondaryColor, headerItems, footerContent } = req.body;

    // Base URL for static files
    const baseUrl = `${req.protocol}://${req.get("host")}/uploads`;

    const logoData = req.files.find((f) => f.fieldname === "logo")?.filename;
    const logo = `${baseUrl}/${logoData}`;

    if (!landingPageName) {
      return res.status(400).json({
        message: "landing page name is requried",
      });
    }

    if (!logo) {
      return res.status(400).json({
        message: "Logo is required",
      });
    }
    const parsedBody = qs.parse(req.body); // Parse deeply nested form-data

    const bannerBox = {
      heading: parsedBody["bannerBox.heading"],
      description: parsedBody["bannerBox.description"],
      price: parsedBody["bannerBox.price"],
      priceViewHeading: parsedBody["bannerBox.priceViewHeading"],
      keypoint: parsedBody["bannerBox.keypoint"],
    };

    const projectInformation = {
      heading: parsedBody["projectInformation.heading"],
      title: parsedBody["projectInformation.heading"],
      keypoint: parsedBody["projectInformation.heading"],
    };

    const projectOverview = {
      heading: parsedBody["projectOverview.heading"],
      title: parsedBody["projectOverview.heading"],
      description: parsedBody["projectOverview.heading"],
    };

    const aboutProject = {
      title: parsedBody["aboutProject.title"],
      description: parsedBody["aboutProject.description"],
    };

    const brochureContentFiles = req.files.filter((f, i) => f.fieldname === "brochureContent.icon");
    const brochureContentIcon = brochureContentFiles.map((file) => ({
      image: `${baseUrl}/${file.filename}`,
    }));

    const brochureContent = {
      icon: brochureContentIcon[0]?.image || null,
      paragraph: parsedBody["brochureContent.paragraph"],
    };

    const playmentPlan = [];
    Object.keys(req.body).forEach((key) => {
      const match = key.match(/playmentPlan\[(\d+)\]\.(.+)/);
      if (match) {
        const index = parseInt(match[1], 10); // Extract index
        const field = match[2]; // Extract field name (e.g., heading, size, price)

        if (!playmentPlan[index]) {
          playmentPlan[index] = {}; // Initialize object at this index
        }

        playmentPlan[index][field] = req.body[key];
      }
    });

    const priceTable = [];
    Object.keys(req.body).forEach((key) => {
      const match = key.match(/priceTable\[(\d+)\]\.(.+)/);
      if (match) {
        const index = parseInt(match[1], 10);
        const field = match[2];
        if (!priceTable[index]) {
          priceTable[index] = {};
        }
        priceTable[index][field] = req.body[key];
      }
    });

    // Gallery files
    const galleryFiles = req.files.filter((f, i) => /^gallery\[\d+\]$/.test(f.fieldname));
    const gallery = galleryFiles.map((file) => ({
      image: `${baseUrl}/${file.filename}`,
    }));

    // banner images
    const bannerFiles = req.files.filter((f, i) => /^bannerImages\[\d+\]$/.test(f.fieldname));
    const bannerImages = bannerFiles.map((file) => ({
      image: `${baseUrl}/${file.filename}`,
    }));

    // floor plan images
    const floorPlanFiles = req.files.filter((f, i) => /^floorPlan\[\d+\]$/.test(f.fieldname));
    const floorPlan = floorPlanFiles.map((file) => ({
      image: `${baseUrl}/${file.filename}`,
    }));

    // qr code
    const qrCodeFiles = req.files.filter((f, i) => /^qrCode\[\d+\]$/.test(f.fieldname));
    const qrCode = qrCodeFiles.map((file) => ({
      image: `${baseUrl}/${file.filename}`,
    }));

    // amenties
    const amenities = [];
    // get amenties name
    const amenitiesFiles = req.files.filter((f) => /^amenities\[\d+\]\.image$/.test(f.fieldname));
    // Reconstruct amenities from req.body and req.files
    Object.keys(req.body).forEach((key) => {
      const match = key.match(/amenities\[(\d+)\]\.(name)/); // Match "amenities[0].name"
      if (match) {
        const index = parseInt(match[1], 10); // Get the index from "amenities[0]"
        if (!amenities[index]) {
          amenities[index] = {}; // Initialize the amenity object
        }
        amenities[index].name = req.body[key]; // Set the name
      }
    });
    // get amenties images
    amenitiesFiles.forEach((file) => {
      const match = file.fieldname.match(/amenities\[(\d+)\](?:\[image\]|\.(image))/);
      if (match) {
        const index = parseInt(match[1], 10); // Extract index
        if (!amenities[index]) {
          amenities[index] = {}; // Initialize object at this index
        }
        amenities[index].image = `${baseUrl}/${file.filename}`;
      }
    });

    // locationAdvantage
    // get its text
    const locationAdvantage = {
      title: parsedBody["locationAdvantage.title"],
      paragraph: parsedBody["locationAdvantage.paragraph"],
      list: parsedBody["locationAdvantage.list"],
    };
    // get image and add into locationAdvantage object
    const locationAdvantageFiles = req.files.filter((f, i) => /^locationAdvantage.image$/.test(f.fieldname));
    const loationImage = locationAdvantageFiles.map((file) => ({
      image: `${baseUrl}/${file.filename}`,
    }));
    locationAdvantage["image"] = loationImage[0]?.image || null;

    // imageForVideo
    const imageForVideoFiles = req.files.filter((f, i) => f.fieldname === "imageForVideo");
    const imageForVideo = imageForVideoFiles.map((file) => ({
      image: `${baseUrl}/${file.filename}`,
    }));

    // map
    const mapFiles = req.files.filter((f, i) => f.fieldname === "map");
    const map = mapFiles.map((file) => ({
      image: `${baseUrl}/${file.filename}`,
    }));

    // add landing page data
    const newLandingPageAdded = await landingPage.create({
      landingPageName,
      logo,
      headerItems,
      themeColor,
      primaryColor,
      secondaryColor,
      bannerBox,
      projectInformation,
      projectOverview,
      aboutProject,
      brochureContent,
      playmentPlan,
      priceTable,
      footerContent,
      gallery: gallery.length ? gallery : [],
      bannerImages: bannerImages.length ? bannerImages : [],
      floorPlan: floorPlan.length ? floorPlan : [],
      qrCode: qrCode.length ? qrCode : [],
      amenities: amenities.length ? amenities : [],
      locationAdvantage,
      imageForVideo: imageForVideo[0]?.image || null,
      map: map[0]?.image || null,
    });

    res.status(201).json({
      status: true,
      data: newLandingPageAdded,
      message: "Landing page added successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something is wrong!",
    });
  }
};

const updateLandingPage = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something is wrong!",
    });
  }
};

const deleteLandingPage = async (req, res) => {
  try {
    const deleteId = req.params.id;
    if (!deleteId) {
      res.status(400).json({
        message: "please enter correct id",
      });
    }
    const deletedLandingPageData = await landingPage.findByIdAndDelete(deleteId);
    res.status(200).json({
      status: true,
      data: deletedLandingPageData,
      message: "landing page deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "landing page deleted",
    });
  }
};

const deleteAllLandingPage = async (req, res) => {
  try {
    await landingPage.deleteMany({});
    res.status(200).json({
      message: "all landing pages are deleted",
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: "delete all landing page",
    });
  }
};

module.exports = {
  getLandingPage,
  addLandingPage,
  updateLandingPage,
  getSingleLandingPage,
  deleteLandingPage,
  deleteAllLandingPage,
};
