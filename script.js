<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Political Dream XI</title>
    <style>
        body {
            text-align: center;
            background-color: #4CAF50;
        }
        .pitch {
            background: #2E7D32;
            width: 1200px;
            height: 900px;
            margin: 20px auto;
            position: relative;
            border-radius: 10px;
            padding: 10px;
        }
        h1 {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 36px;
            text-rendering: optimizeLegibility; /* Improve text rendering */
            -webkit-font-smoothing: antialiased; /* For WebKit browsers */
            -moz-osx-font-smoothing: grayscale; /* For Firefox */
        }
        h1 span {
            display: inline-block;
        }
        h1 img {
            height: 40px;
            margin-left: 10px;
            vertical-align: middle;
        }
        .formation {
            position: relative;
            height: 100%;
        }
        .row {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            gap: 60px;
        }
        .strikers { top: 120px; } /* Adjusted to create more space */
        .midfielders { top: 30%; }
        .defenders { top: 50%; }
        .goalkeeper { top: 67%; left: 50%; transform: translateX(-50%); position: absolute; }
        .coach { top: 80%; left: 10%; position: absolute; }
        .player {
            text-align: center;
            color: white;
        }
        .player input[type="text"] {
            display: block;
            margin-top: 5px;
            text-align: center;
            width: 120px;
            font-size: 16px; /* Adjust font size */
            font-weight: bold; /* Make text bold */
            text-rendering: optimizeLegibility; /* Improve text rendering */
            -webkit-font-smoothing: antialiased; /* For WebKit browsers */
            -moz-osx-font-smoothing: grayscale; /* For Firefox */
        }
        .preview {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid white;
            object-fit: cover;
        }
        .save-share {
            margin-top: 20px;
        }

        input[type="file"] {
            display: none;
        }
        input[type="file"] + .preview {
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="pitch">
        <h1>
            <span>Political Dream XI</span>
        </h1>
        <div class="formation">
            <div class="row strikers">
                <div class="player"><img class="preview" onclick="document.getElementById('striker1').click();"><input type="file" id="striker1"><input type="text" placeholder="Striker 1"></div>
                <div class="player"><img class="preview" onclick="document.getElementById('striker2').click();"><input type="file" id="striker2"><input type="text" placeholder="Striker 2"></div>
            </div>
            <div class="row midfielders">
                <div class="player"><img class="preview" onclick="document.getElementById('mid1').click();"><input type="file" id="mid1"><input type="text" placeholder="Mid 1"></div>
                <div class="player"><img class="preview" onclick="document.getElementById('mid2').click();"><input type="file" id="mid2"><input type="text" placeholder="Mid 2"></div>
                <div class="player"><img class="preview" onclick="document.getElementById('mid3').click();"><input type="file" id="mid3"><input type="text" placeholder="Mid 3"></div>
                <div class="player"><img class="preview" onclick="document.getElementById('mid4').click();"><input type="file" id="mid4"><input type="text" placeholder="Mid 4"></div>
            </div>
            <div class="row defenders">
                <div class="player"><img class="preview" onclick="document.getElementById('def1').click();"><input type="file" id="def1"><input type="text" placeholder="Def 1"></div>
                <div class="player"><img class="preview" onclick="document.getElementById('def2').click();"><input type="file" id="def2"><input type="text" placeholder="Def 2"></div>
                <div class="player"><img class="preview" onclick="document.getElementById('def3').click();"><input type="file" id="def3"><input type="text" placeholder="Def 3"></div>
                <div class="player"><img class="preview" onclick="document.getElementById('def4').click();"><input type="file" id="def4"><input type="text" placeholder="Def 4"></div>
            </div>
            <div class="row goalkeeper">
                <div class="player">
                    <img class="preview" onclick="document.getElementById('goalkeeper').click();"><input type="file" id="goalkeeper">
                    <input type="text" placeholder="Goalkeeper" />
                </div>
            </div>
            <div class="coach">
                <div class="player"><img class="preview" onclick="document.getElementById('coach').click();"><input type="file" id="coach"><input type="text" value="Dr. Yunus" readonly></div>
            </div>
        </div>
    </div>
    <div class="save-share">
        <button onclick="saveAsImage()">Save as PNG</button>
        <button onclick="shareOnFacebook()">Share on Facebook</button>
        <button onclick="shareOnLinkedIn()">Share on LinkedIn</button>
    </div>
    <script>
        document.querySelectorAll('input[type="file"]').forEach(input => {
            input.addEventListener('change', function(e) {
                const preview = this.previousElementSibling;
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => preview.src = e.target.result;
                    reader.readAsDataURL(file);
                }
            });
        });

        function saveAsImage() {
            html2canvas(document.querySelector(".pitch"), {
                scale: 3,  // Increased scale for better resolution
                width: 1200, // Increased canvas width
                height: 900, // Increased canvas height
                useCORS: true // Enable CORS for external images
            }).then(canvas => {
                let link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");  // Use PNG format for better quality
                link.download = "Political_Dream_XI.png";   // Download as PNG
                link.click();
            });
        }

        function shareOnFacebook() {
            let url = encodeURIComponent(window.location.href);
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        }

        function shareOnLinkedIn() {
            let url = encodeURIComponent(window.location.href);
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        }
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js"></script>
</body>
</html>
