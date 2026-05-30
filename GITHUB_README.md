<div align="center">

<img src="https://i.imgur.com/JyJRXIl.png" alt="Blood Typing Game Logo" width="150" height="150">

# 🩸 Blood Typing Game 🩸

<p align="center">
  <img src="images/blood-compatibility-chart.svg" alt="Blood Typing Game" width="600">
</p>

[![Website](https://img.shields.io/badge/Website-gunjanjaswal.me-4285F4?style=for-the-badge&logo=firefox-browser&logoColor=white)](https://gunjanjaswal.me)
[![GitHub](https://img.shields.io/badge/GitHub-BloodTypingGame-171515?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gunjanjaswal/BloodTypingGame)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Ko-fi](https://img.shields.io/badge/Support-Ko--fi-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/gunjanjaswal)

<p align="center">
  <i>An interactive educational web game about blood types, transfusions, and medical science</i>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-play-the-game">Play</a> •
  <a href="#-educational-content">Learn</a> •
  <a href="#-getting-started">Install</a> •
  <a href="#-author">Author</a>
</p>

</div>

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  📋 Overview
</h2>

An interactive educational web game that teaches users about blood types, blood typing procedures, and safe blood transfusions. This project is inspired by the 1930 Nobel Prize in Physiology or Medicine awarded to Karl Landsteiner for the discovery of human blood groups.

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  🎮 Play the Game
</h2>

The Blood Typing Game challenges players to:
1. Determine patients' blood types through simulated blood tests
2. Select compatible blood bags for transfusion
3. Save lives by performing correct transfusions
4. Learn about blood type compatibility and the science behind it

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  🧪 Educational Content
</h2>

The game covers:

- **ABO and Rh Blood Group Systems**
  - Type A: Has A antigens and B antibodies
  - Type B: Has B antigens and A antibodies
  - Type AB: Has both A and B antigens, no A or B antibodies
  - Type O: No A or B antigens, has both A and B antibodies
  - Rh+ and Rh- factors

- **Blood Transfusion Compatibility**
  - Universal donor (O-)
  - Universal recipient (AB+)
  - Compatibility rules between different blood types
  - Consequences of incompatible transfusions

- **Nobel Prize Connection**
  - Karl Landsteiner's discovery of human blood groups in 1901
  - The 1930 Nobel Prize in Physiology or Medicine
  - Impact on modern medicine and transfusion safety

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  🔧️ Technical Details
</h2>

### 💻 Technologies Used
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) Semantic markup for structure
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) with ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white) for responsive design
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) Pure vanilla JS for game logic
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) For local development server

### ✨ Features
- 🔬 Interactive blood typing simulation with realistic reactions
- 💉 Accurate blood transfusion mechanics based on medical science
- 🏆 Engaging scoring system with visual feedback
- 📱 Fully responsive design for all devices and screen sizes
- 🧠 Rich educational content integrated seamlessly with gameplay
- 🎨 Modern UI with smooth animations and transitions

### Project Structure
```
BloodTypingGame/
├── css/
│   └── styles.css
├── js/
│   └── game.js
├── images/
│   └── blood-compatibility-chart.png
├── index.html
├── server.js
├── package.json
└── README.md
```

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  🚀 Getting Started
</h2>

### 💻 Prerequisites
- ![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=flat-square&logo=googlechrome&logoColor=white) ![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=flat-square&logo=firefoxbrowser&logoColor=white) ![Safari](https://img.shields.io/badge/Safari-000000?style=flat-square&logo=safari&logoColor=white) ![Edge](https://img.shields.io/badge/Edge-0078D7?style=flat-square&logo=microsoftedge&logoColor=white) A modern web browser
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) (optional, for running the local development server)

### 📍 Installation

1. 💼 Clone this repository:
```bash
git clone https://github.com/gunjanjaswal/BloodTypingGame.git
```

2. 👁️ Navigate to the project directory:
```bash
cd BloodTypingGame
```

3. 📈 To run with Node.js server:
```bash
npm start
```

4. 🌟 Alternatively, simply open `index.html` in your web browser.

> 💡 **Tip:** For the best experience, use a modern browser with JavaScript enabled.

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  🎯 How to Play
</h2>

1. 🔹 **Start the Game**: Click the "Start Game" button on the main menu
2. 🔹 **For Each Patient**:
   - 🧪 **Test the Blood**: Use Anti-A, Anti-B, and Anti-Rh serums to test the patient's blood
   - 🔎 **Observe Reactions**: Watch for agglutination (clumping) which indicates presence of antigens
   - 📝 **Determine Blood Type**: Based on test results, select the correct blood type
   - 🩸 **Select Compatible Blood**: Choose a blood bag that's compatible with the patient
   - 💉 **Perform Transfusion**: Click the button to perform the transfusion
3. 🔹 **Score**: Try to save all five patients to achieve a perfect score

> ⚠️ **Warning**: Incorrect blood type matching can cause transfusion reactions!

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  📚 Learning Outcomes
</h2>

Players will gain valuable knowledge about:

- 🧪 **Blood Typing Techniques**: Learn how medical professionals determine blood types
- 🩸 **Transfusion Compatibility**: Understand which blood types can safely be given to which recipients
- 🔍 **Antigen-Antibody Reactions**: Visualize how blood type incompatibilities cause reactions
- 📜 **Medical History**: Discover the Nobel Prize-winning work of Karl Landsteiner
- 🎓 **Clinical Applications**: See how blood typing knowledge saves lives in medical settings

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  🔮 Future Enhancements
</h2>

Exciting features planned for future releases:

- 🎮 **Challenge Mode**: Additional game modes with varying difficulty levels
- ✨ **Enhanced Visuals**: More detailed animations of blood typing reactions
- 📖 **Knowledge Base**: Expanded educational content about hematology
- 👥 **Multiplayer**: Competitive mode for classrooms and training
- 🎖 **Achievements**: Comprehensive achievement and badge system
- 📊 **Statistics**: Detailed performance tracking and learning analytics

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  👨‍💻 Author
</h2>

<div align="center">
  <img src="https://github.com/gunjanjaswal.png" width="120" height="120" style="border-radius:50%; border: 3px solid #E63946;"/>
  
  <h3>Gunjan Jaswal</h3>
  
  <p>
    <a href="https://gunjanjaswal.me" target="_blank">
      <img src="https://img.shields.io/badge/Website-gunjanjaswal.me-4285F4?style=for-the-badge&logo=firefox-browser&logoColor=white" alt="Website"/>
    </a>
    <a href="https://github.com/gunjanjaswal" target="_blank">
      <img src="https://img.shields.io/badge/GitHub-gunjanjaswal-171515?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
    </a>
    <a href="mailto:hello@gunjanjaswal.me">
      <img src="https://img.shields.io/badge/Email-hello@gunjanjaswal.me-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
    </a>
  </p>
</div>

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  ☕ Support This Project
</h2>

<div align="center">
  <p>If you find this project helpful or educational, consider supporting its development:</p>
  
  <a href="https://ko-fi.com/gunjanjaswal" target="_blank">
    <img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" alt="Support on Ko-fi" height="60">
  </a>
  
  <p><i>Your support helps maintain and improve this educational resource!</i></p>
</div>

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  📄 License
</h2>

<div align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="MIT License">
  </a>
  
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
</div>

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  🙏 Acknowledgements
</h2>

<div align="center">
  <p>
    <span>🌟 Directly inspired by <a href="https://educationalgames.nobelprize.org/educational/medicine/bloodtypinggame/">The Nobel Prize Blood Typing Game</a></span><br>
    <span>🧬 Based on Karl Landsteiner's Nobel Prize-winning work in blood group discovery</span><br>
    <span>🎓 Created for educational purposes to promote understanding of blood types and transfusions</span><br>
    <span>💜 Special thanks to the medical and scientific community for their ongoing research</span>
  </p>
</div>

<h2 align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <br>
  🔍 Keywords
</h2>

<div align="center">

![](https://img.shields.io/badge/blood_typing-E63946?style=for-the-badge)
![](https://img.shields.io/badge/educational_game-457B9D?style=for-the-badge)
![](https://img.shields.io/badge/medical_education-1D3557?style=for-the-badge)
![](https://img.shields.io/badge/hematology-F1FAEE?style=for-the-badge&color=E63946)
![](https://img.shields.io/badge/blood_transfusion-A8DADC?style=for-the-badge)
![](https://img.shields.io/badge/ABO_blood_groups-457B9D?style=for-the-badge)
![](https://img.shields.io/badge/Rh_factor-1D3557?style=for-the-badge)
![](https://img.shields.io/badge/Karl_Landsteiner-F1FAEE?style=for-the-badge&color=E63946)
![](https://img.shields.io/badge/Nobel_Prize-A8DADC?style=for-the-badge)
![](https://img.shields.io/badge/interactive_learning-457B9D?style=for-the-badge)
![](https://img.shields.io/badge/web_game-1D3557?style=for-the-badge)
![](https://img.shields.io/badge/JavaScript_game-F1FAEE?style=for-the-badge&color=F7DF1E)
![](https://img.shields.io/badge/medical_simulation-A8DADC?style=for-the-badge)
![](https://img.shields.io/badge/blood_compatibility-457B9D?style=for-the-badge)
![](https://img.shields.io/badge/blood_types-1D3557?style=for-the-badge)
![](https://img.shields.io/badge/medical_science-F1FAEE?style=for-the-badge&color=E63946)
![](https://img.shields.io/badge/educational_technology-A8DADC?style=for-the-badge)
![](https://img.shields.io/badge/e--learning-457B9D?style=for-the-badge)
![](https://img.shields.io/badge/STEM_education-1D3557?style=for-the-badge)
![](https://img.shields.io/badge/healthcare_education-F1FAEE?style=for-the-badge&color=E63946)

</div>

<div align="center">
  <img src="https://i.imgur.com/waxVImv.png" alt="Colorful Divider" width="600" height="16">
  <p>© 2025 <a href="https://gunjanjaswal.me">Gunjan Jaswal</a> • Made with ❤️ for education</p>
  <p>
    <a href="https://gunjanjaswal.me">Website</a> •
    <a href="https://github.com/gunjanjaswal">GitHub</a> •
    <a href="mailto:hello@gunjanjaswal.me">Contact</a> •
    <a href="https://ko-fi.com/gunjanjaswal">Support</a>
  </p>
</div>
