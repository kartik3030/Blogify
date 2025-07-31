const express = require("express")
const path = require("path")
const multer = require("multer")
const fs = require("fs")

const app = express()
const PORT = process.env.PORT || 3000

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../FRONTEND/views"));

// middleware
app.use(express.static(path.join(__dirname, "../FRONTEND")));
app.use("/images", express.static(path.join(__dirname, "database/images")));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// To get the homepage
app.get("/blogify", (req, res) => {
    res.sendFile((path.join(__dirname, "../FRONTEND/index.html")))
})

// To get the particular page
// article with dynamic data
app.get("/blogify/article", (req, res) => {
    fs.readFile((path.join(__dirname, "./database/03_newBlog.json")), "utf-8", (err, data) => {
        if (err) return res.status(500).send("Error reading blog data");
        let arr = []
        if (data) {
            try {
                arr = JSON.parse(data).arr || [];
            } catch (e) {
                return res.status(500).send(e);
            }
        }

        res.render("nav01_article", { arr });

    });
});
// podcast
app.get("/blogify/podcast", (req, res) => {
    res.sendFile(path.join(__dirname, "../FRONTEND/navbarRoutes/nav02_podcast.html"));
});
// be a writer
app.get("/blogify/writer", (req, res) => {
    fs.readFile((path.join(__dirname, "./database/03_newBlog.json")), "utf-8", (err, data) => {
        let arr = []
        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            } catch (e) {
                return res.status(500).send(e);
            }
        }
        res.render("nav03_be_writer", { arr })
    })
});
// upload
app.get("/blogify/upload", (req, res) => {
    res.sendFile(path.join(__dirname, "../FRONTEND/navbarRoutes/nav03_Upload.html"));
});
// chat 
app.get("/blogify/chat", (req, res) => {
    res.sendFile(path.join(__dirname, "../FRONTEND/navbarRoutes/nav04_chat.html"));
});
// signin
app.get("/blogify/signin", (req, res) => {
    res.sendFile(path.join(__dirname, "../FRONTEND/navbarRoutes/nav05_signin.html"));
});
// create acc
app.get("/blogify/createAccount", (req, res) => {
    res.sendFile(path.join(__dirname, "../FRONTEND/navbarRoutes/nav06_CreateAcc.html"));
});
// broadcast data receive
app.post("/blogify", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    let newJoinee = { name, email }

    fs.readFile((path.join(__dirname, "./database/01_broadCast.json")), "utf8", (err, data) => {
        let arr = []
        if (!err && data) {
            try {
                const parsed = JSON.parse(data);
                arr = parsed.arr || [];
            } catch (parseErr) {
                console.log("Error parsing JSON:", parseErr.message);
            }
        }
        arr.push(newJoinee)
        fs.writeFile((path.join(__dirname, "./database/01_broadCast.json")), JSON.stringify({ arr }), (err) => {
            if (err) {
                res.status(500).send("Failed to Write data")
            }
            else {
                res.redirect("/blogify")
            }
        })
    })
})

// Subscribers email retreive
app.post("/subscriber", (req, res) => {
    let id = Date.now().toString()
    const email = req.body.email
    let newSub = { id, email }

    fs.readFile((path.join(__dirname, "./database/02_subscribeEmail.json")), "utf8", (err, data) => {
        let arr = []
        if (data) {
            let parse = JSON.parse(data)
            arr = parse
        }
        else {
            arr = []
        }
        arr.push(newSub)
        fs.writeFile((path.join(__dirname, "./database/02_subscribeEmail.json")), JSON.stringify({ arr }), (err) => {
            if (err) {
                res.status(500).send("Failed to Write data")
            }
            else {
                res.redirect("/blogify/article")
            }
        })
    })
})

// // fetching image using multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "./database/images"))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

// getting blogs dynamically from user
app.post("/dynamicBlog", upload.single("file"), (req, res) => {
    if (!req.file) return res.status(400).send("No file uploaded");

    const filename = req.file.originalname;
    const id = Date.now().toString();
    const { title, textarea, author } = req.body;

    const newData = { id, title, author, textarea, filename }; // ✅ Use filename from req.file

    const blogPath = path.join(__dirname, "./database/03_newBlog.json");

    fs.readFile(blogPath, (error, data) => {
        let arr = [];

        if (!error && data.length > 0) {
            try {
                const parsed = JSON.parse(data);
                arr = parsed.arr || [];
            } catch (err) {
                return res.status(500).send("Error parsing JSON");
            }
        }

        arr.push(newData);

        fs.writeFile(blogPath, JSON.stringify({ arr }, null, 2), (err) => {
            if (err) return res.status(500).send("Error writing file");
            res.redirect("/blogify/writer")
        });
    });
});
// New user account
app.post("/createAcc", (req, res) => {
    const { name, email, password, } = req.body
    const newUser = { name, email, password, }
    fs.readFile((path.join(__dirname, "./database/04_createAcc.json")), (err, data) => {
        let arr = []
        if (data) {
            try {
                let parseData = JSON.parse(data)
                arr = parseData.arr || []
            } catch (err) {
                console.log("Erorr")
            }
        }
        arr.push(newUser)
        fs.writeFile((path.join(__dirname, "./database/04_createAcc.json")), JSON.stringify({ arr }), (err) => {
            if (err) {
                res.send("Some error occured while uploading").status(500)
            }
            res.send(`
  <html>
    <body>
      <h2>Account created successfully! Redirecting to login page</h2>
      <script>
        setTimeout(() => {
          window.location.href = "/blogify/signin";
        }, 2000);
      </script>
    </body>
  </html>
`);
        })
    })
        ``
})

// on click on blogs
app.get("/blogify/page/:id", (req, res) => {
    const id = req.params.id
    fs.readFile((path.join(__dirname, "./database/03_newBlog.json")), "utf-8", (err, data) => {
        let arr = []
        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            } catch (e) {
                res.status(500).send(e)
            }
        }
        const blog = arr.find(blog => blog.id === id);
        if (!blog) return res.status(404).send("Blog not found");
        res.render("page", { blog })
    })
});

// Deleting a blog
app.delete("/blogify/delete/:id", (req, res) => {
    const id = req.params.id
    fs.readFile((path.join(__dirname, "./database/03_newBlog.json")), "utf-8", (err, data) => {
        let arr = []
        if (data) {
            try {
                arr = JSON.parse(data).arr || []
            }
            catch (err) {
                res.status(500).send(err)
            }
        }
        const index = arr.findIndex(blog => blog.id == id)
        if (index === -1) {
            return res.status(404).send("Blog not found.");
        }
        arr.splice(index, 1);

        const updatedData = JSON.stringify({ arr });

        fs.writeFile(path.join(__dirname, "./database/03_newBlog.json"), updatedData, (err) => {
            if (err) return res.status(500).send("Error writing file.");

            res.status(200).send("Blog deleted successfully");
        });
    })
})

// verifying the authentic user
app.post("/verify", (req, res) => {
    const { email, password } = req.body

    fs.readFile(path.join(__dirname, "./database/04_createAcc.json"), "utf-8", (err, data) => {
        if (err) return res.send("Server error")

        let arr = []
        try {
            arr = JSON.parse(data).arr || []
        } catch (err) {
            return res.send("Corrupted user data")
        }

        const user = arr.find(u => u.email === email && u.password === password)
        if (user) {
            res.send("success") // frontend handles redirect
        } else {
            res.send("fail")
        }
    })
})

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})
