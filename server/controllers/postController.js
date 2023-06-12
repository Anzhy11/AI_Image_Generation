const dotenv = require('dotenv').config();
const cloudinary = require('cloudinary').v2

const Post = require('../models/post');

cloudinary.config({
  cloud_name: process.env.CLOUDINRY_CLOUD_NAME,
  api_key: process.env.CLOUDINRY_API_KEY,
  api_secret: process.env.CLOUDINRY_API_SECRETE,
});

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({ sucess: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

const createPost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
}

module.exports = { getAllPosts, createPost };