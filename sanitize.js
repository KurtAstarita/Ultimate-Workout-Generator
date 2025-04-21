function sanitizeInput(element) {
    element.value = element.value.replace(/[<>]/g, "");
}

document.getElementById('paste-text').addEventListener('input', function() {
    sanitizeInput(this);
});

function validateWorkoutText(text) {
    if (!text || text.trim() === "") {
        return "Please paste your workout text.";
    }

    const lines = text.split('\n').filter(line => line.trim() !== "");
    if (lines.length > 9) {
        return "The workout can have a maximum of 9 exercises.";
    }

    const lineRegex = /^(.*?) - Reps: (\d+x\d+(?:\s*sec)?(?:-\d+(?:-\d+)?\s*sec)?) - Rest: (\d+\s*seconds?) - Time per set: (\d+\s*seconds?)$/i;

    for (const line of lines) {
        const match = line.match(lineRegex);
        if (!match) {
            return `Invalid workout format on line: "${line}". Please use the format: Exercise Name - Reps: NxY (sec optional) - Rest: Z seconds - Time per set: W seconds`;
        }

        const exerciseName = match[1].trim();
        const reps = match[2].trim();
        const rest = match[3].trim();
        const timePerSet = match[4].trim();

        // You could add further validation here if needed, e.g.,
        // checking if the numbers in reps, rest, and timePerSet are within reasonable ranges.
    }

    return null; // No validation errors
}

document.getElementById('download-pdf').addEventListener('click', function() {
    const workoutText = document.getElementById('paste-text').value;
    const validationError = validateWorkoutText(workoutText);

    if (validationError) {
        alert(validationError);
        return;
    }

    // If validation passes, proceed with PDF generation
    generateWorkoutChart(workoutText); // Assuming this is your PDF generation function
});

// You might still want to keep the basic sanitizeInput for immediate < and > removal
document.getElementById('paste-text').addEventListener('input', function() {
    sanitizeInput(this);
});
