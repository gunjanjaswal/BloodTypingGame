// Blood Typing Game - Main JavaScript File

// Game state
const gameState = {
    currentPatient: 1,
    totalPatients: 5,
    patientsSaved: 0,
    mistakes: 0,
    currentBloodType: null,
    selectedBloodBag: null,
    testResults: {
        'anti-a': false,
        'anti-b': false,
        'anti-rh': false
    },
    bloodTypesDetermined: [],
    gameActive: false
};

// Blood type data
const bloodTypes = {
    'A+': {
        antigens: ['A', 'Rh'],
        antibodies: ['B'],
        compatibility: {
            canReceiveFrom: ['A+', 'A-', 'O+', 'O-'],
            canDonateTo: ['A+', 'AB+']
        },
        frequency: 0.34 // 34% of population
    },
    'A-': {
        antigens: ['A'],
        antibodies: ['B', 'Rh'],
        compatibility: {
            canReceiveFrom: ['A-', 'O-'],
            canDonateTo: ['A+', 'A-', 'AB+', 'AB-']
        },
        frequency: 0.06 // 6% of population
    },
    'B+': {
        antigens: ['B', 'Rh'],
        antibodies: ['A'],
        compatibility: {
            canReceiveFrom: ['B+', 'B-', 'O+', 'O-'],
            canDonateTo: ['B+', 'AB+']
        },
        frequency: 0.09 // 9% of population
    },
    'B-': {
        antigens: ['B'],
        antibodies: ['A', 'Rh'],
        compatibility: {
            canReceiveFrom: ['B-', 'O-'],
            canDonateTo: ['B+', 'B-', 'AB+', 'AB-']
        },
        frequency: 0.02 // 2% of population
    },
    'AB+': {
        antigens: ['A', 'B', 'Rh'],
        antibodies: [],
        compatibility: {
            canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            canDonateTo: ['AB+']
        },
        frequency: 0.03 // 3% of population
    },
    'AB-': {
        antigens: ['A', 'B'],
        antibodies: ['Rh'],
        compatibility: {
            canReceiveFrom: ['A-', 'B-', 'AB-', 'O-'],
            canDonateTo: ['AB+', 'AB-']
        },
        frequency: 0.01 // 1% of population
    },
    'O+': {
        antigens: ['Rh'],
        antibodies: ['A', 'B'],
        compatibility: {
            canReceiveFrom: ['O+', 'O-'],
            canDonateTo: ['A+', 'B+', 'AB+', 'O+']
        },
        frequency: 0.38 // 38% of population
    },
    'O-': {
        antigens: [],
        antibodies: ['A', 'B', 'Rh'],
        compatibility: {
            canReceiveFrom: ['O-'],
            canDonateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
        },
        frequency: 0.07 // 7% of population
    }
};

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Menu buttons
    const startGameBtn = document.getElementById('start-game');
    const learnMoreBtn = document.getElementById('learn-more');
    const backToMenuBtn = document.getElementById('back-to-menu');
    const backToMenuGameBtn = document.getElementById('back-to-menu-game');
    const backToMenuLearnBtn = document.getElementById('back-to-menu-learn');
    const playAgainBtn = document.getElementById('play-again');
    const learnMoreResultsBtn = document.getElementById('learn-more-results');
    
    // Game screens
    const mainMenu = document.getElementById('main-menu');
    const gameScreen = document.getElementById('game-screen');
    const learnScreen = document.getElementById('learn-screen');
    const resultsScreen = document.getElementById('results-screen');
    
    // Game elements
    const patientNumber = document.getElementById('patient-number');
    const patientStatus = document.getElementById('patient-status');
    const testButtons = document.querySelectorAll('.test-btn');
    const bloodTypeRadios = document.querySelectorAll('input[name="blood-group"]');
    const bloodBags = document.querySelectorAll('.blood-bag');
    const selectedBloodType = document.getElementById('selected-blood-type');
    const performTransfusionBtn = document.getElementById('perform-transfusion');
    const patientFigure = document.querySelector('.patient-figure');
    const patientsSavedElement = document.getElementById('patients-saved');
    const progressBar = document.getElementById('progress-bar');
    const bloodDrops = document.querySelectorAll('#blood-drops .blood-drop');
    const finalScore = document.getElementById('final-score');
    const finalBloodDrops = document.querySelectorAll('#final-blood-drops .blood-drop');
    const resultsMessage = document.getElementById('results-message');
    
    // Event Listeners
    startGameBtn.addEventListener('click', startGame);
    learnMoreBtn.addEventListener('click', showLearnScreen);
    backToMenuBtn.addEventListener('click', showMainMenu);
    backToMenuGameBtn.addEventListener('click', showMainMenu);
    backToMenuLearnBtn.addEventListener('click', showMainMenu);
    playAgainBtn.addEventListener('click', resetGame);
    learnMoreResultsBtn.addEventListener('click', showLearnScreen);
    
    // Test buttons
    testButtons.forEach(button => {
        button.addEventListener('click', function() {
            const testType = this.dataset.test;
            performBloodTest(testType);
        });
    });
    
    // Blood type selection
    bloodTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            determineBloodType(this.value);
        });
    });
    
    // Blood bag selection
    bloodBags.forEach(bag => {
        bag.addEventListener('click', function() {
            selectBloodBag(this.dataset.type);
        });
    });
    
    // Perform transfusion
    performTransfusionBtn.addEventListener('click', performTransfusion);
    
    // Game Functions
    function startGame() {
        showGameScreen();
        resetGame();
        generateNewPatient();
        gameState.gameActive = true;
    }
    
    function resetGame() {
        gameState.currentPatient = 1;
        gameState.patientsSaved = 0;
        gameState.mistakes = 0;
        gameState.bloodTypesDetermined = [];
        updateGameProgress();
        showGameScreen();
        generateNewPatient();
    }
    
    function generateNewPatient() {
        // Reset UI elements
        resetTestResults();
        resetBloodTypeSelection();
        resetBloodBagSelection();
        
        // Update patient number
        patientNumber.textContent = gameState.currentPatient;
        
        // Generate random blood type based on population frequency
        gameState.currentBloodType = generateRandomBloodType();
        console.log(`Generated patient with blood type: ${gameState.currentBloodType}`);
        
        // Enable test buttons
        testButtons.forEach(button => button.disabled = false);
        
        // Disable transfusion button
        performTransfusionBtn.disabled = true;
    }
    
    function generateRandomBloodType() {
        const randomValue = Math.random();
        let cumulativeProbability = 0;
        
        for (const [type, data] of Object.entries(bloodTypes)) {
            cumulativeProbability += data.frequency;
            if (randomValue <= cumulativeProbability) {
                return type;
            }
        }
        
        // Fallback to O+ (most common)
        return 'O+';
    }
    
    function performBloodTest(testType) {
        const bloodType = gameState.currentBloodType;
        const bloodTypeData = bloodTypes[bloodType];
        const bloodSample = document.querySelector(`#test-${testType} .blood-sample`);
        
        let reaction = false;
        
        // Determine if there should be a reaction based on antigens and antibodies
        if (testType === 'anti-a' && bloodTypeData.antigens.includes('A')) {
            reaction = true;
        } else if (testType === 'anti-b' && bloodTypeData.antigens.includes('B')) {
            reaction = true;
        } else if (testType === 'anti-rh' && bloodTypeData.antigens.includes('Rh')) {
            reaction = true;
        }
        
        // Update UI to show reaction
        if (reaction) {
            bloodSample.classList.add('agglutination');
            bloodSample.classList.remove('no-reaction');
        } else {
            bloodSample.classList.remove('agglutination');
            bloodSample.classList.add('no-reaction');
        }
        
        // Store test result
        gameState.testResults[testType] = reaction;
        
        // Disable the test button
        document.querySelector(`[data-test="${testType}"]`).disabled = true;
    }
    
    function determineBloodType(selectedType) {
        // Enable transfusion button once blood type is selected
        performTransfusionBtn.disabled = false;
        
        // Store the determined blood type
        gameState.bloodTypesDetermined.push(selectedType);
    }
    
    function selectBloodBag(bloodType) {
        // Reset previous selection
        bloodBags.forEach(bag => bag.classList.remove('selected'));
        
        // Select the new blood bag
        const selectedBag = document.querySelector(`.blood-bag[data-type="${bloodType}"]`);
        if (selectedBag) {
            selectedBag.classList.add('selected');
            gameState.selectedBloodBag = bloodType;
            selectedBloodType.textContent = bloodType;
            
            // Enable transfusion button if blood type has been determined
            if (gameState.bloodTypesDetermined.length > 0) {
                performTransfusionBtn.disabled = false;
            }
        }
    }
    
    function performTransfusion() {
        const patientBloodType = gameState.currentBloodType;
        const donorBloodType = gameState.selectedBloodBag;
        const patientBloodData = bloodTypes[patientBloodType];
        
        // Check if transfusion is compatible
        const isCompatible = patientBloodData.compatibility.canReceiveFrom.includes(donorBloodType);
        
        if (isCompatible) {
            // Successful transfusion
            patientStatus.textContent = 'Stable - Transfusion successful';
            patientStatus.className = 'text-success';
            gameState.patientsSaved++;
            
            // Show success animation
            patientFigure.classList.add('success');
            setTimeout(() => {
                patientFigure.classList.remove('success');
            }, 1000);
        } else {
            // Failed transfusion - reaction
            patientStatus.textContent = 'Critical - Transfusion reaction!';
            patientStatus.className = 'text-danger';
            gameState.mistakes++;
            
            // Show reaction animation
            patientFigure.classList.add('reaction');
            setTimeout(() => {
                patientFigure.classList.remove('reaction');
            }, 1000);
        }
        
        // Update game progress
        updateGameProgress();
        
        // Move to next patient or end game
        gameState.currentPatient++;
        if (gameState.currentPatient <= gameState.totalPatients) {
            setTimeout(generateNewPatient, 2000);
        } else {
            setTimeout(showResults, 2000);
        }
    }
    
    function updateGameProgress() {
        // Update patients saved counter
        patientsSavedElement.textContent = gameState.patientsSaved;
        
        // Update progress bar
        const progressPercentage = (gameState.currentPatient - 1) / gameState.totalPatients * 100;
        progressBar.style.width = `${progressPercentage}%`;
        
        // Update blood drops (score indicators)
        const correctTransfusions = gameState.patientsSaved;
        bloodDrops.forEach((drop, index) => {
            if (index < correctTransfusions) {
                drop.classList.add('active');
            } else {
                drop.classList.remove('active');
            }
        });
    }
    
    function showResults() {
        // Hide game screen
        gameScreen.classList.add('d-none');
        
        // Show results screen
        resultsScreen.classList.remove('d-none');
        
        // Update final score
        finalScore.textContent = gameState.patientsSaved;
        
        // Update final blood drops
        finalBloodDrops.forEach((drop, index) => {
            if (index < gameState.patientsSaved) {
                drop.classList.add('active');
            } else {
                drop.classList.remove('active');
            }
        });
        
        // Update results message
        if (gameState.patientsSaved === gameState.totalPatients) {
            resultsMessage.textContent = 'Congratulations! You saved all patients with perfect blood transfusions!';
            resultsMessage.className = 'text-success';
        } else if (gameState.patientsSaved >= 3) {
            resultsMessage.textContent = 'Good job! You saved most of the patients, but there\'s still room for improvement.';
            resultsMessage.className = 'text-primary';
        } else {
            resultsMessage.textContent = 'You need more practice with blood typing. Try again to improve your score!';
            resultsMessage.className = 'text-danger';
        }
    }
    
    // Helper functions for UI management
    function showMainMenu() {
        mainMenu.classList.remove('d-none');
        gameScreen.classList.add('d-none');
        learnScreen.classList.add('d-none');
        resultsScreen.classList.add('d-none');
    }
    
    function showGameScreen() {
        mainMenu.classList.add('d-none');
        gameScreen.classList.remove('d-none');
        learnScreen.classList.add('d-none');
        resultsScreen.classList.add('d-none');
    }
    
    function showLearnScreen() {
        mainMenu.classList.add('d-none');
        gameScreen.classList.add('d-none');
        learnScreen.classList.remove('d-none');
        resultsScreen.classList.add('d-none');
    }
    
    function resetTestResults() {
        // Reset test results in game state
        gameState.testResults = {
            'anti-a': false,
            'anti-b': false,
            'anti-rh': false
        };
        
        // Reset UI
        document.querySelectorAll('.blood-sample').forEach(sample => {
            sample.classList.remove('agglutination', 'no-reaction');
        });
    }
    
    function resetBloodTypeSelection() {
        // Clear radio button selection
        bloodTypeRadios.forEach(radio => {
            radio.checked = false;
        });
        
        // Reset game state
        gameState.bloodTypesDetermined = [];
    }
    
    function resetBloodBagSelection() {
        // Clear blood bag selection
        bloodBags.forEach(bag => {
            bag.classList.remove('selected');
        });
        
        // Reset game state
        gameState.selectedBloodBag = null;
        selectedBloodType.textContent = 'None';
        
        // Disable transfusion button
        performTransfusionBtn.disabled = true;
    }
});
