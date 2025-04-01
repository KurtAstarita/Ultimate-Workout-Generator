document.addEventListener('DOMContentLoaded', function() {
    const workoutName = document.getElementById("workout-name");
    const workoutDate = document.getElementById("workout-date");
    const workoutEntries = document.getElementById("workout-entries");
    const confirmationDialog = document.getElementById("confirmation-dialog");
    const confirmYes = document.getElementById("confirm-yes");
    const confirmNo = document.getElementById("confirm-no");

    let entryToRemove = null;

    // Function to sanitize input
    function sanitizeInput(input) {
        let sanitized = DOMPurify.sanitize(input);
        sanitized = sanitized.replace(/[<>]/g, '');
        return sanitized;
    }

    document.getElementById("add-entry").addEventListener("click", () => {
        const entry = document.createElement("div");
        entry.classList.add("workout-entry");
        entry.innerHTML = `
            <input type="text" placeholder="Exercise">
            <input type="number" placeholder="Set" min="1">
            <input type="number" placeholder="Reps" min="1">
            <input type="number" placeholder="Weight" min="0">
            <input type="text" placeholder="Notes">
        `;
        workoutEntries.appendChild(entry);
    });

    document.getElementById("remove-entry").addEventListener("click", () => {
        if (workoutEntries.children.length > 1) {
            entryToRemove = workoutEntries.lastChild;
            confirmationDialog.style.display = "block";
        }
    });

    confirmYes.addEventListener("click", () => {
        workoutEntries.removeChild(entryToRemove);
        confirmationDialog.style.display = "none";
        entryToRemove = null;
    });

    confirmNo.addEventListener("click", () => {
        confirmationDialog.style.display = "none";
        entryToRemove = null;
    });

    document.getElementById("save-workout").addEventListener("click", () => {
        const workout = {
            name: sanitizeInput(workoutName.value),
            date: workoutDate.value,
            entries: Array.from(workoutEntries.children)
                .slice(1)
                .map(entry =>
                    Array.from(entry.querySelectorAll("input")).map(input =>
                        sanitizeInput(input.value)
                    )
                )
        };

        if (!workout.name || !workout.date || workout.entries.length === 0) {
            alert("Please complete all fields before saving.");
            return;
        }

        localStorage.setItem("workoutLog", JSON.stringify(workout));
        alert("Workout log saved!");
    });

    document.getElementById("load-workout").addEventListener("click", () => {
        const savedWorkout = localStorage.getItem("workoutLog");
        if (!savedWorkout) return alert("No saved workout log found.");

        const workout = JSON.parse(savedWorkout);
        workoutName.value = workout.name || "";
        workoutDate.value = workout.date || "";

        while (workoutEntries.children.length > 1) {
            workoutEntries.removeChild(workoutEntries.lastChild);
        }

        workout.entries.forEach(entry => {
            document.getElementById("add-entry").click();
            const inputFields = workoutEntries.lastChild.querySelectorAll("input");
            inputFields.forEach((input, index) => (input.value = entry[index] || ""));
        });
    });

    document.getElementById("print-pdf").addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        if (!jsPDF) {
            alert("jsPDF library not loaded. PDF generation is unavailable.");
            return;
        }
        const doc = new jsPDF();
        try {
            doc.text("Daily Workout Chart", 10, 10);
            doc.text(`Workout Name: ${workoutName.value || "Unnamed Workout"}`, 10, 20);
            doc.text(`Date: ${workoutDate.value || "No Date"}`, 10, 30);

            let y = 40; // Starting y-coordinate for exercise entries
            const lineHeight = 10;
            const pageWidth = doc.internal.pageSize.getWidth() - 20;

            // Add headers for exercise entries
            doc.text("Exercise", 10, y);
            doc.text("Sets", 50, y);
            doc.text("Reps", 70, y);
            doc.text("Weight", 90, y);
            doc.text("Notes", 110, y);
            y += lineHeight;

            Array.from(workoutEntries.children).slice(1).forEach(entry => {
                const inputs = entry.querySelectorAll("input");
                const exercise = inputs[0].value || "";
                const sets = inputs[1].value || "";
                const reps = inputs[2].value || "";
                const weight = inputs[3].value || "";
                const notes = inputs[4].value || "";

                doc.text(exercise, 10, y);
                doc.text(sets, 50, y);
                doc.text(reps, 70, y);
                doc.text(weight, 90, y);
                const splitNotes = doc.splitTextToSize(notes, pageWidth - 110);
                splitNotes.forEach(noteLine =>{
                    doc.text(noteLine, 110, y);
                    y += lineHeight;
                });
                y+= lineHeight;
            });

            doc.save("workoutLog.pdf");
            alert("PDF generated successfully with dynamic data!");
        } catch (error) {
            console.error("PDF generation error:", error);
            alert("Failed to generate PDF. Please try again.");
        }
    });

    document.getElementById("download-workout").addEventListener("click", () => {
        const workout = localStorage.getItem("workoutLog");
        if (!workout) return alert("No workout log to download.");

        const blob = new Blob([workout], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "workoutLog.json";
        a.click();
        URL.revokeObjectURL(a.href);
    });

    document.getElementById("upload-workout").addEventListener("change", event => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = e => {
            try {
                const parsedData = JSON.parse(e.target.result);

                if (typeof parsedData !== 'object' || parsedData === null ||
                    !parsedData.hasOwnProperty('name') || !parsedData.hasOwnProperty('date') ||
                    !parsedData.hasOwnProperty('entries') || !Array.isArray(parsedData.entries)) {
                    throw new Error("Invalid workout log structure.");
                }

                for (const entry of parsedData.entries) {
                    if (!Array.isArray(entry) || entry.length !== 5) {
                        throw new Error("Invalid workout entry structure.");
                    }
                }

                localStorage.setItem("workoutLog", JSON.stringify(parsedData));
                document.getElementById("load-workout").click();
                alert("Workout log uploaded!");

            } catch (error) {
                alert("Invalid file uploaded: " + error.message);
            }
        };
        reader.readAsText(file);
    });
});
