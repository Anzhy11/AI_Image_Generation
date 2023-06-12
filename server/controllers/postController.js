const dotenv = require('dotenv').config();
const { v2, cloudinary } = require('cloudinary');

const Post = require('../models/post');

cloudinary.config({
  cloud_name: process.env.CLOUDINRY_CLOUD_NAME,
  api_key: process.env.CLOUDINRY_API_KEY,
  api_key_secret: process.env.CLOUDINRY_API_SECRET,
});

const getAllPosts = async (req, res) => {
  res.send('hallo there')
}

const createPost = async (req, res) => {
  const { name, prompt, photo } = req.body;

  try {
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    })

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
}

module.exports = { getAllPosts, createPost };