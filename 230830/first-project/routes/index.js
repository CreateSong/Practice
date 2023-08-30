var express = require('express');
var router = express.Router();

const postModel = require("../model/post");

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });
  try {
    const result = await post.save();
    res.status(200).json({
      message: "upload success!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await postModel.find({})
    res.status(200).json({
      message: "Read success",
      data: result,
    });
  } catch (error){
    res.status(500).json({
      message: error,
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postModel.findById(id);
    res.status(200).json({
      message: "detail success!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(id, {
      title: title,
      content: content,
    }, {
      new: true,
    }
    );
    res.status(200).json({
      message: "update success!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete success!"
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});
// const loginCheck = require("../module/loginCheck")
// const upload = require("../module/imageUpload");

// let arr = [];

// /* GET home page. */
// router.get('/read',(req,res) => {
//   res.status(200).json({
//     message: "read success",
//   }) 
// })

// // POST method

// router.post('/create', (req, res) => {
//   const data = req.body.data;
//   arr.push(data);
//   res.status(200).json({
//     message: "create success!",
//     result: arr,
//   })
//   console.log(req.body);
// })

// // PUT method

// // 만약 내가 0번째인 데이터를 update하고싶다 하면  
// router.put("/update/:id",(req,res) => {
//   const { id } = req.params;
//   const { data } = req.body;
//   arr[id] = data;
//   res.status(200).json({
//     message: "update success",
//     result: arr,
//   })
// })

// // DELETE method

// router.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   arr.splice(id, 1);
//   res.status(200).json({
//     message: "delete success",
//     result: arr,
//   })
// })


// router.get('/', loginCheck, (req,res) => {
//   res.status(200).json({
//     message: "login success!",
//   });
// })

// router.post('/upload',upload.single('image'),(req, res) => {
//   const file = req.file;
//   console.log(file);
//   res.status(200).json({
//     message: "upload success!",
//   })
// });

module.exports = router;
