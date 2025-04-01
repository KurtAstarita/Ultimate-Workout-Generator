function sanitizeInput(element) {
    element.value = element.value.replace(/[<>]/g, "");
}

document.getElementById('paste-text').addEventListener('input', function() {
    sanitizeInput(this);
});

const exercises = {
    muscle: {
        beginner: {
            dumbbells: [
            [{ name: "Dumbbell Rows", muscles: "Back, Biceps", equipment: "Dumbbells", sets: 3, reps: 10, rest: 60 }],
            [{ name: "Dumbbell Bicep Curls", muscles: "Biceps", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Dumbbell Shoulder Press", muscles: "Shoulders", equipment: "Dumbbells", sets: 3, reps: 10, rest01: 60 }],
            [{ name: "Dumbbell Lunges", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Dumbbell Chest Press", muscles: "Chest, Triceps", equipment: "Dumbbells", sets: 3, reps: 10, rest: 60 }],
            [{ name: "Dumbbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Dumbbell Lateral Raises", muscles: "Shoulders", equipment: "Dumbbells", sets: 3, reps: 15, rest: 60 }],
            [{ name: "Dumbbell Hammer Curls", muscles: "Biceps, Forearms", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Dumbbell Goblet Squats", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Dumbbell Triceps Extensions", muscles: "Triceps", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60 }],
            ],
            bodyweight: [
            [{ name: "Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 3, reps: 10, rest: 60 }],
            [{ name: "Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Lunges", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Plank", muscles: "Core", equipment: "None", sets: 3, reps: "30 sec", rest: 60 }],
            [{ name: "Crunches", muscles: "Abs", equipment: "None", sets: 3, reps: 15, rest: 60 }],
            [{ name: "Glute Bridges", muscles: "Glutes, Hamstrings", equipment: "None", sets: 3, reps: 15, rest: 60 }],
            [{ name: "Incline Push-ups", muscles: "Chest, Triceps, Shoulders", equipment: "Elevated Surface", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Wall Sit", muscles: "Quads", equipment: "Wall", sets: 3, reps: "30 sec", rest: 60 }],
            [{ name: "Leg Raises", muscles: "Lower Abs", equipment: "None", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Superman", muscles: "Lower Back", equipment: "None", sets: 3, reps: 15, rest: 60 }],
            ],
          machines: [
            [{ name: "Chest Press Machine", muscles: "Chest, Triceps", equipment: "Machine", sets: 3, reps: 10, rest: 60 }],
            [{ name: "Lat Pulldown Machine", muscles: "Back, Biceps", equipment: "Machine", sets: 3, reps: 10, rest: 60 }],
            [{ name: "Leg Press Machine", muscles: "Quads, Glutes", equipment: "Machine", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Seated Row Machine", muscles: "Back, Biceps", equipment: "Machine", sets: 3, reps: 10, rest: 60 }],
            [{ name: "Shoulder Press Machine", muscles: "Shoulders", equipment: "Machine", sets: 3, reps: 10, rest: 60 }],
            [{ name: "Leg Extension Machine", muscles: "Quads", equipment: "Machine", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Hamstring Curl Machine", muscles: "Hamstrings", equipment: "Machine", sets: 3, reps: 12, rest: 60 }],
            [{ name: "Calf Raise Machine", muscles: "Calves", equipment: "Machine", sets: 3, reps: 15, rest: 60 }],
            [{ name: "Ab Crunch Machine", muscles: "Abs", equipment: "Machine", sets: 3, reps: 15, rest: 60 }],
            [{ name: "Back Extension Machine", muscles: "Lower Back", equipment: "Machine", sets: 3, reps: 15, rest: 60 }],
        ],
        barbells: [
            [{ name: "Barbell Bench Press", muscles: "Chest, Triceps", equipment: "Barbell", sets: 3, reps: 8, rest: 75 }],
            [{ name: "Barbell Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 3, reps: 8, rest: 75 }],
            [{ name: "Barbell Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 3, reps: 8, rest: 75 }],
            [{ name: "Barbell Overhead Press", muscles: "Shoulders", equipment: "Barbell", sets: 3, reps: 8, rest: 75 }],
            [{ name: "Barbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Barbell", sets: 3, reps: 10, rest: 75 }],
            [{ name: "Barbell Bicep Curls", muscles: "Biceps", equipment: "Barbell", sets: 3, reps: 10, rest: 75 }],
            [{ name: "Barbell Triceps Extensions", muscles: "Triceps", equipment: "Barbell", sets: 3, reps: 10, rest: 75 }],
            [{ name: "Barbell Lunges", muscles: "Quads, Glutes", equipment: "Barbell", sets: 3, reps: 10, rest: 75 }],
            [{ name: "Barbell Shrugs", muscles: "Traps", equipment: "Barbell", sets: 3, reps: 12, rest: 75 }],
            [{ name: "Barbell Calf Raises", muscles: "Calves", equipment: "Barbell", sets: 3, reps: 15, rest: 75 }],
          ],
        },
     intermediate: {
    barbell: [
        [{ name: "Barbell Bench Press", muscles: "Chest, Triceps", equipment: "Barbell", sets: 4, reps: 8, rest: 90 }],
        [{ name: "Barbell Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 4, reps: 8, rest: 90 }],
        [{ name: "Barbell Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 4, reps: 8, rest: 90 }],
        [{ name: "Barbell Overhead Press", muscles: "Shoulders", equipment: "Barbell", sets: 4, reps: 8, rest: 90 }],
        [{ name: "Barbell Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Barbell", sets: 3, reps: 6, rest: 120 }],
        [{ name: "Barbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Barbell", sets: 4, reps: 10, rest: 90 }],
        [{ name: "Barbell Hip Thrusts", muscles: "Glutes", equipment: "Barbell", sets: 4, reps: 10, rest: 90 }],
        [{ name: "Barbell Lunges", muscles: "Quads, Glutes", equipment: "Barbell", sets: 4, reps: 10, rest: 90 }],
        [{ name: "Barbell Shrugs", muscles: "Traps", equipment: "Barbell", sets: 4, reps: 12, rest: 90 }],
        [{ name: "Barbell Bicep Curls", muscles: "Biceps", equipment: "Barbell", sets: 4, reps: 10, rest: 90 }],
    ],
    gym: [
        [{ name: "Lat Pulldowns", muscles: "Back", equipment: "Gym", sets: 4, reps: 10, rest: 75 }],
        [{ name: "Leg Press", muscles: "Quads, Glutes", equipment: "Gym", sets: 4, reps: 10, rest: 75 }],
        [{ name: "Cable Rows", muscles: "Back", equipment: "Gym", sets: 4, reps: 10, rest: 75 }],
        [{ name: "Chest Flyes", muscles: "Chest", equipment: "Gym", sets: 4, reps: 12, rest: 75 }],
        [{ name: "Pull ups", muscles: "Back, Biceps", equipment: "Gym", sets: 3, reps: "25", rest: 90 }],
        [{ name: "Dips", muscles: "Chest, Triceps, Shoulders", equipment: "Gym", sets: 3, reps: "As Many As Possible", rest: 90 }],
        [{ name: "Leg Extensions", muscles: "Quads", equipment: "Gym", sets: 4, reps: 12, rest: 75 }],
        [{ name: "Hamstring Curls", muscles: "Hamstrings", equipment: "Gym", sets: 4, reps: 12, rest: 75 }],
        [{ name: "Cable Triceps Pushdowns", muscles: "Triceps", equipment: "Gym", sets: 4, reps: 12, rest: 75 }],
        [{ name: "Face Pulls", muscles: "Rear Delts, Upper Back", equipment: "Gym", sets: 4, reps: 15, rest: 75 }],
    ],
    dumbbells: [
        [{ name: "Dumbbell Bench Press", muscles: "Chest, Triceps", equipment: "Dumbbells", sets: 4, reps: 10, rest: 75 }],
        [{ name: "Dumbbell Rows", muscles: "Back, Biceps", equipment: "Dumbbells", sets: 4, reps: 10, rest: 75 }],
        [{ name: "Dumbbell Shoulder Press", muscles: "Shoulders", equipment: "Dumbbells", sets: 4, reps: 10, rest: 75 }],
        [{ name: "Dumbbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75 }],
        [{ name: "Dumbbell Lunges", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75 }],
        [{ name: "Dumbbell Bicep Curls", muscles: "Biceps", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75 }],
        [{ name: "Dumbbell Hammer Curls", muscles: "Biceps, Forearms", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75 }],
        [{ name: "Dumbbell Triceps Extensions", muscles: "Triceps", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75 }],
        [{ name: "Dumbbell Lateral Raises", muscles: "Shoulders", equipment: "Dumbbells", sets: 4, reps: 15, rest: 75 }],
        [{ name: "Dumbbell Goblet Squats", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75 }],
    ],
    bodyweight: [
        [{ name: "Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 4, reps: "25", rest: 75 }],
        [{ name: "Squats", muscles: "Quads, Glutes", equipment: "None", sets: 4, reps: 15, rest: 60 }],
        [{ name: "Lunges", muscles: "Quads, Glutes", equipment: "None", sets: 4, reps: 15, rest: 60 }],
        [{ name: "Plank", muscles: "Core", equipment: "None", sets: 4, reps: "45 sec", rest: 60 }],
        [{ name: "Crunches", muscles: "Abs", equipment: "None", sets: 4, reps: 20, rest: 60 }],
        [{ name: "Glute Bridges", muscles: "Glutes, Hamstrings", equipment: "None", sets: 4, reps: 20, rest: 60 }],
        [{ name: "Incline Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "Elevated Surface", sets: 4, reps: 15, rest: 60 }],
        [{ name: "Wall Sit", muscles: "Quads", equipment: "Wall", sets: 4, reps: "45 sec", rest: 60 }],
        [{ name: "Leg Raises", muscles: "Lower Abs", equipment: "None", sets: 4, reps: 15, rest: 60 }],
        [{ name: "Superman", muscles: "Lower Back", equipment: "None", sets: 4, reps: 20, rest: 60 }],
    ],
},
    advanced: {
    gym: [
        [{ name: "Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Gym", sets: 3, reps: 6, rest: 120 }],
        [{ name: "Pull ups", muscles: "Back, Biceps", equipment: "Gym", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Overhead Press", muscles: "Shoulders", equipment: "Gym", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Barbell Hip Thrusts", muscles: "Glutes", equipment: "Gym", sets: 3, reps: 10, rest: 120 }],
        [{ name: "Weighted Pull ups", muscles: "Back, Biceps", equipment: "Gym", sets: 3, reps: 6, rest: 120 }],
        [{ name: "Weighted Dips", muscles: "Chest, Triceps, Shoulders", equipment: "Gym", sets: 3, reps: 6, rest: 120 }],
        [{ name: "Barbell Rows Pendlay", muscles: "Back, Biceps", equipment: "Barbell", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Incline Barbell Press", muscles: "Chest, Triceps", equipment: "Barbell", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Front Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Barbell", sets: 3, reps: 10, rest: 120 }],
    ],
    barbell: [
        [{ name: "Barbell Bench Press", muscles: "Chest, Triceps", equipment: "Barbell", sets: 4, reps: 6, rest: 120 }],
        [{ name: "Barbell Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 4, reps: 6, rest: 120 }],
        [{ name: "Barbell Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Barbell", sets: 3, reps: 5, rest: 180 }],
        [{ name: "Barbell Overhead Press", muscles: "Shoulders", equipment: "Barbell", sets: 4, reps: 6, rest: 120 }],
        [{ name: "Barbell Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 4, reps: 6, rest: 120 }],
        [{ name: "Barbell Hip Thrusts", muscles: "Glutes", equipment: "Barbell", sets: 4, reps: 8, rest: 120 }],
        [{ name: "Barbell Lunges", muscles: "Quads, Glutes", equipment: "Barbell", sets: 4, reps: 8, rest: 120 }],
        [{ name: "Barbell Bicep Curls", muscles: "Biceps", equipment: "Barbell", sets: 4, reps: 8, rest: 120 }],
        [{ name: "Barbell Triceps Extensions", muscles: "Triceps", equipment: "Barbell", sets: 4, reps: 8, rest: 120 }],
        [{ name: "Barbell Shrugs", muscles: "Traps", equipment: "Barbell", sets: 4, reps: 10, rest: 120 }],
    ],
    dumbbells: [
        [{ name: "Dumbbell Bench Press", muscles: "Chest, Triceps", equipment: "Dumbbells", sets: 4, reps: 8, rest: 120 }],
        [{ name: "Dumbbell Rows", muscles: "Back, Biceps", equipment: "Dumbbells", sets: 4, reps: 8, rest: 120 }],
        [{ name: "Dumbbell Shoulder Press", muscles: "Shoulders", equipment: "Dumbbells", sets: 4, reps: 8, rest: 120 }],
        [{ name: "Dumbbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120 }],
        [{ name: "Dumbbell Lunges", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120 }],
        [{ name: "Dumbbell Bicep Curls", muscles: "Biceps", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120 }],
        [{ name: "Dumbbell Hammer Curls", muscles: "Biceps, Forearms", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120 }],
        [{ name: "Dumbbell Triceps Extensions", muscles: "Triceps", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120 }],
        [{ name: "Dumbbell Lateral Raises", muscles: "Shoulders", equipment: "Dumbbells", sets: 4, reps: 12, rest: 120 }],
        [{ name: "Dumbbell Goblet Squats", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120 }],
    ],
    bodyweight: [
        [{ name: "Push ups Weighted", muscles: "Chest, Triceps, Shoulders", equipment: "Weighted Vest/Plate", sets: 4, reps: 8, rest: 120 }],
        [{ name: "Pistol Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 6, rest: 120 }],
        [{ name: "Pull ups Weighted", muscles: "Back, Biceps", equipment: "Weighted Belt", sets: 4, reps: 6, rest: 120 }],
        [{ name: "Dips Weighted", muscles: "Chest, Triceps, Shoulders", equipment: "Weighted Belt", sets: 4, reps: "As Many As Possible", rest: 120 }],
        [{ name: "Handstand Push ups", muscles: "Shoulders, Triceps", equipment: "Wall", sets: 3, reps: "As 5", rest: 120 }],
        [{ name: "Muscle ups", muscles: "Back, Biceps, Chest, Triceps", equipment: "Gym", sets: 3, reps: "5", rest: 180 }],
        [{ name: "Planche Leans", muscles: "Chest, Triceps, Shoulders, Core", equipment: "None", sets: 3, reps: "15", rest: 120 }],
        [{ name: "Front Lever Holds", muscles: "Back, Core", equipment: "Gym", sets: 3, reps: "15 sec hold", rest: 120 }],
        [{ name: "One Arm Pull ups Assisted", muscles: "Back, Biceps", equipment: "Gym", sets: 3, reps: "As Many As Possible", rest: 180 }],
        [{ name: "Advanced Plank Variations", muscles: "Core", equipment: "None", sets: 3, reps: "60 sec hold", rest: 120 }],
    ],
},
 strength: {
       beginner: {
         bodyweight: [
            { name: "Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 3, reps: 8, rest: 90 },
            { name: "Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 10, rest: 90 },
            { name: "Plank", muscles: "Core", equipment: "None", sets: 3, reps: "20 sec", rest: 90 },
            { name: "Incline Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "Elevated Surface", sets: 3, reps: 10, rest: 90 },
            { name: "Glute Bridges", muscles: "Glutes, Hamstrings", equipment: "None", sets: 3, reps: 12, rest: 90 },
            { name: "Walking Lunges", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 10, rest: 90 },
            { name: "Wall Sit", muscles: "Quads", equipment: "Wall", sets: 3, reps: "30 sec", rest: 90 },
            { name: "Crunches", muscles: "Abs", equipment: "None", sets: 3, reps: 12, rest: 90 },
            { name: "Superman", muscles: "Lower Back", equipment: "None", sets: 3, reps: 12, rest: 90 },
            { name: "Knee Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 3, reps: 12, rest: 90 },
        ],
        dumbbells: [
            { name: "Dumbbell Squats", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Rows", muscles: "Back, Biceps", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Bench Press", muscles: "Chest, Triceps", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Shoulder Press", muscles: "Shoulders", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Lunges", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Bicep Curls", muscles: "Biceps", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Triceps Extensions", muscles: "Triceps", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Goblet Squats", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Calf Raises", muscles: "Calves", equipment: "Dumbbells", sets: 3, reps: 12, rest: 90 },
        ],
        barbells: [
            { name: "Barbell Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 3, reps: 8, rest: 90 },
            { name: "Barbell Bench Press", muscles: "Chest, Triceps", equipment: "Barbell", sets: 3, reps: 8, rest: 90 },
            { name: "Barbell Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 3, reps: 8, rest: 90 },
            { name: "Barbell Overhead Press", muscles: "Shoulders", equipment: "Barbell", sets: 3, reps: 8, rest: 90 },
            { name: "Barbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Barbell", sets: 3, reps: 10, rest: 90 },
            { name: "Barbell Lunges", muscles: "Quads, Glutes", equipment: "Barbell", sets: 3, reps: 10, rest: 90 },
            { name: "Barbell Bicep Curls", muscles: "Biceps", equipment: "Barbell", sets: 3, reps: 10, rest: 90 },
            { name: "Barbell Triceps Extensions", muscles: "Triceps", equipment: "Barbell", sets: 3, reps: 10, rest: 90 },
            { name: "Barbell Shrugs", muscles: "Traps", equipment: "Barbell", sets: 3, reps: 12, rest: 90 },
            { name: "Barbell Calf Raises", muscles: "Calves", equipment: "Barbell", sets: 3, reps: 12, rest: 90 },
        ],
        machines: [
            { name: "Leg Press Machine", muscles: "Quads, Glutes", equipment: "Machine", sets: 3, reps: 10, rest: 90 },
            { name: "Chest Press Machine", muscles: "Chest, Triceps", equipment: "Machine", sets: 3, reps: 10, rest: 90 },
            { name: "Lat Pulldown Machine", muscles: "Back, Biceps", equipment: "Machine", sets: 3, reps: 10, rest: 90 },
            { name: "Seated Row Machine", muscles: "Back, Biceps", equipment: "Machine", sets: 3, reps: 10, rest: 90 },
            { name: "Shoulder Press Machine", muscles: "Shoulders", equipment: "Machine", sets: 3, reps: 10, rest: 90 },
            { name: "Leg Extension Machine", muscles: "Quads", equipment: "Machine", sets: 3, reps: 12, rest: 90 },
            { name: "Hamstring Curl Machine", muscles: "Hamstrings", equipment: "Machine", sets: 3, reps: 12, rest: 90 },
            { name: "Calf Raise Machine", muscles: "Calves", equipment: "Machine", sets: 3, reps: 15, rest: 90 },
            { name: "Ab Crunch Machine", muscles: "Abs", equipment: "Machine", sets: 3, reps: 15, rest: 90 },
            { name: "Back Extension Machine", muscles: "Lower Back", equipment: "Machine", sets: 3, reps: 15, rest: 90 },
            ],
        },
    strength: {
    beginner: {
        bodyweight: [
            [{ name: "Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 3, reps: 8, rest: 90 }],
            [{ name: "Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Plank", muscles: "Core", equipment: "None", sets: 3, reps: "20 sec", rest: 90 }],
            [{ name: "Incline Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "Elevated Surface", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Glute Bridges", muscles: "Glutes, Hamstrings", equipment: "None", sets: 3, reps: 12, rest: 90 }],
            [{ name: "Walking Lunges", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Wall Sit", muscles: "Quads", equipment: "Wall", sets: 3, reps: "30 sec", rest: 90 }],
            [{ name: "Crunches", muscles: "Abs", equipment: "None", sets: 3, reps: 12, rest: 90 }],
            [{ name: "Superman", muscles: "Lower Back", equipment: "None", sets: 3, reps: 12, rest: 90 }],
            [{ name: "Knee Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 3, reps: 12, rest: 90 }],
        ],
        dumbbells: [
            [{ name: "Dumbbell Squats", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90 }],
            [{ name: "Dumbbell Rows", muscles: "Back, Biceps", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90 }],
            [{ name: "Dumbbell Bench Press", muscles: "Chest, Triceps", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90 }],
            [{ name: "Dumbbell Shoulder Press", muscles: "Shoulders", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90 }],
            [{ name: "Dumbbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Dumbbell Lunges", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Dumbbell Bicep Curls", muscles: "Biceps", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Dumbbell Triceps Extensions", muscles: "Triceps", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Dumbbell Goblet Squats", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Dumbbell Calf Raises", muscles: "Calves", equipment: "Dumbbells", sets: 3, reps: 12, rest: 90 }],
        ],
        barbells: [
            [{ name: "Barbell Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 3, reps: 8, rest: 90 }],
            [{ name: "Barbell Bench Press", muscles: "Chest, Triceps", equipment: "Barbell", sets: 3, reps: 8, rest: 90 }],
            [{ name: "Barbell Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 3, reps: 8, rest: 90 }],
            [{ name: "Barbell Overhead Press", muscles: "Shoulders", equipment: "Barbell", sets: 3, reps: 8, rest: 90 }],
            [{ name: "Barbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Barbell", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Barbell Lunges", muscles: "Quads, Glutes", equipment: "Barbell", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Barbell Bicep Curls", muscles: "Biceps", equipment: "Barbell", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Barbell Triceps Extensions", muscles: "Triceps", equipment: "Barbell", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Barbell Shrugs", muscles: "Traps", equipment: "Barbell", sets: 3, reps: 12, rest: 90 }],
            [{ name: "Barbell Calf Raises", muscles: "Calves", equipment: "Barbell", sets: 3, reps: 12, rest: 90 }],
        ],
        machines: [
            [{ name: "Leg Press Machine", muscles: "Quads, Glutes", equipment: "Machine", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Chest Press Machine", muscles: "Chest, Triceps", equipment: "Machine", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Lat Pulldown Machine", muscles: "Back, Biceps", equipment: "Machine", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Seated Row Machine", muscles: "Back, Biceps", equipment: "Machine", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Shoulder Press Machine", muscles: "Shoulders", equipment: "Machine", sets: 3, reps: 10, rest: 90 }],
            [{ name: "Leg Extension Machine", muscles: "Quads", equipment: "Machine", sets: 3, reps: 12, rest: 90 }],
            [{ name: "Hamstring Curl Machine", muscles: "Hamstrings", equipment: "Machine", sets: 3, reps: 12, rest: 90 }],
            [{ name: "Calf Raise Machine", muscles: "Calves", equipment: "Machine", sets: 3, reps: 15, rest: 90 }],
            [{ name: "Ab Crunch Machine", muscles: "Abs", equipment: "Machine", sets: 3, reps: 15, rest: 90 }],
            [{ name: "Back Extension Machine", muscles: "Lower Back", equipment: "Machine", sets: 3, reps: 15, rest: 90 }],
        ],
    },
advanced: {
    gym: [
        [{ name: "Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Gym", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Bench Press", muscles: "Chest, Triceps", equipment: "Gym", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Squats", muscles: "Quads, Glutes", equipment: "Gym", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Overhead Press", muscles: "Shoulders", equipment: "Gym", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Barbell Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Weighted Pull ups", muscles: "Back, Biceps", equipment: "Gym", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Weighted Dips", muscles: "Chest, Triceps, Shoulders", equipment: "Gym", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Front Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Power Cleans", muscles: "Full Body", equipment: "Barbell", sets: 3, reps: 3, rest: 240 }],
        [{ name: "Snatch", muscles: "Full Body", equipment: "Barbell", sets: 3, reps: 2, rest: 240 }],
    ],
    barbell: [
        [{ name: "Barbell Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 5, reps: 3, rest: 240 }],
        [{ name: "Barbell Bench Press", muscles: "Chest, Triceps", equipment: "Barbell", sets: 5, reps: 3, rest: 240 }],
        [{ name: "Barbell Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Barbell", sets: 3, reps: 3, rest: 300 }],
        [{ name: "Barbell Overhead Press", muscles: "Shoulders", equipment: "Barbell", sets: 5, reps: 3, rest: 240 }],
        [{ name: "Barbell Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 5, reps: 3, rest: 240 }],
        [{ name: "Barbell Front Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 3, reps: 3, rest: 240 }],
        [{ name: "Barbell Power Cleans", muscles: "Full Body", equipment: "Barbell", sets: 3, reps: 2, rest: 240 }],
        [{ name: "Barbell Snatch", muscles: "Full Body", equipment: "Barbell", sets: 3, reps: 1, rest: 240 }],
        [{ name: "Barbell Good Mornings", muscles: "Hamstrings, Glutes, Lower Back", equipment: "Barbell", sets: 3, reps: 5, rest: 180 }],
        [{ name: "Barbell Lunges", muscles: "Quads, Glutes", equipment: "Barbell", sets: 3, reps: 5, rest: 180 }],
    ],
    dumbbells: [
        [{ name: "Dumbbell Bench Press", muscles: "Chest, Triceps", equipment: "Dumbbells", sets: 3, reps: 5, rest: 180 }],
        [{ name: "Dumbbell Rows", muscles: "Back, Biceps", equipment: "Dumbbells", sets: 3, reps: 5, rest: 180 }],
        [{ name: "Dumbbell Shoulder Press", muscles: "Shoulders", equipment: "Dumbbells", sets: 3, reps: 5, rest: 180 }],
        [{ name: "Dumbbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180 }],
        [{ name: "Dumbbell Lunges", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180 }],
        [{ name: "Dumbbell Bicep Curls", muscles: "Biceps", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180 }],
        [{ name: "Dumbbell Triceps Extensions", muscles: "Triceps", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180 }],
        [{ name: "Dumbbell Goblet Squats", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180 }],
        [{ name: "Dumbbell Pull overs", muscles: "Chest, Back, Triceps", equipment: "Dumbbells", sets: 3, reps: 10, rest: 180 }],
        [{ name: "Dumbbell Calf Raises", muscles: "Calves", equipment: "Dumbbells", sets: 3, reps: 10, rest: 180 }],
    ],
    bodyweight: [
        [{ name: "Weighted Pull ups", muscles: "Back, Biceps", equipment: "Weighted Belt", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Weighted Dips", muscles: "Chest, Triceps, Shoulders", equipment: "Weighted Belt", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Pistol Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 5, rest: 240 }],
        [{ name: "Handstand Push ups", muscles: "Shoulders, Triceps", equipment: "Wall", sets: 3, reps: "As Many As Possible", rest: 240 }],
        [{ name: "Muscle ups", muscles: "Back, Biceps, Chest, Triceps", equipment: "Gym", sets: 3, reps: "As Many As Possible", rest: 300 }],
        [{ name: "Planche Leans", muscles: "Chest, Triceps, Shoulders, Core", equipment: "None", sets: 3, reps: "20 sec hold", rest: 240 }],
        [{ name: "Front Lever Holds", muscles: "Back, Core", equipment: "Gym", sets: 3, reps: "20 sec hold", rest: 240 }],
        [{ name: "One Arm Pull ups Assisted", muscles: "Back, Biceps", equipment: "Gym", sets: 3, reps: "As Many As Possible", rest: 300 }],
        [{ name: "Advanced Plank Variations", muscles: "Core", equipment: "None", sets: 3, reps: "90 sec hold", rest: 240 }],
        [{ name: "Weighted Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "Weighted Vest/Plate", sets: 3, reps: 5, rest: 240 }],
    ],
},
endurance: {
    beginner: {
        bodyweight: [
            [{ name: "Jumping Jacks", muscles: "Full body", equipment: "None", sets: 3, reps: 30, rest: 30 }],
            [{ name: "High Knees", muscles: "Legs", equipment: "None", sets: 3, reps: 30, rest: 30 }],
            [{ name: "Walking", muscles: "Legs", equipment: "None", sets: 1, reps: "10 minutes", rest: 0 }],
            [{ name: "Butt Kicks", muscles: "Hamstrings, Glutes", equipment: "None", sets: 3, reps: 30, rest: 30 }],
            [{ name: "Mountain Climbers", muscles: "Core, Legs, Shoulders", equipment: "None", sets: 3, reps: 20, rest: 40 }],
            [{ name: "Step ups", muscles: "Quads, Glutes", equipment: "Step or Sturdy Chair", sets: 3, reps: 10, rest: 30 }],
        ],
        dumbbells: [
            [{ name: "Dumbbell Thrusters", muscles: "Full Body", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45 }],
            [{ name: "Dumbbell Swings", muscles: "Glutes, Hamstrings, Shoulders", equipment: "Dumbbells", sets: 3, reps: 15, rest: 45 }],
            [{ name: "Dumbbell Shadow Boxing", muscles: "Shoulders, Arms", equipment: "Dumbbells", sets: 3, reps: 30, rest: 30 }],
        ],
        gym: [
            [{ name: "Treadmill Run", muscles: "Legs", equipment: "Treadmill", sets: 1, reps: "10 minutes", rest: 0 }],
            [{ name: "Elliptical", muscles: "Legs, Full Body", equipment: "Elliptical", sets: 1, reps: "10 minutes", rest: 0 }],
            [{ name: "Stationary Bike", muscles: "Legs", equipment: "Stationary Bike", sets: 1, reps: "10 minutes", rest: 0 }],
        ],
    },
    intermediate: {
        bodyweight: [
            [{ name: "Burpees", muscles: "Full body", equipment: "None", sets: 3, reps: 30, rest: 30 }],
            [{ name: "Mountain Climbers", muscles: "Core, Legs", equipment: "None", sets: 3, reps: 30, rest: 30 }],
            [{ name: "Running", muscles: "Legs", equipment: "None", sets: 1, reps: "20 minutes", rest: 0 }],
            [{ name: "Jump Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 15, rest: 45 }],
            [{ name: "High Plank Jacks", muscles: "Core, Shoulders", equipment: "None", sets: 3, reps: 20, rest: 30 }],
            [{ name: "Skater Jumps", muscles: "Legs, Glutes", equipment: "None", sets: 3, reps: 15, rest: 30 }],
        ],
        dumbbells: [
            [{ name: "Dumbbell Snatches", muscles: "Full Body", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45 }],
            [{ name: "Dumbbell Push Press", muscles: "Shoulders, Triceps, Legs", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45 }],
            [{ name: "Dumbbell Renegade Rows", muscles: "Back, Core, Biceps", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45 }],
            [{ name: "Dumbbell Walking Lunges", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 10, rest: 30 }],
            [{ name: "Dumbbell Burpees", muscles: "Full Body", equipment: "Dumbbells", sets: 3, reps: 8, rest: 45 }],
        ],
        gym: [
            [{ name: "Rowing Machine", muscles: "Back, Legs, Arms", equipment: "Rowing Machine", sets: 1, reps: "15 minutes", rest: 0 }],
            [{ name: "Assault Bike", muscles: "Legs, Arms", equipment: "Assault Bike", sets: 1, reps: "12 minutes", rest: 0 }],
            [{ name: "Stair Climber", muscles: "Legs, Glutes", equipment: "Stair Climber", sets: 1, reps: "15 minutes", rest: 0 }],
            [{ name: "Battle Ropes", muscles: "Shoulders, Arms, Core", equipment: "Battle Ropes", sets: 3, reps: 30, rest: 45 }],
            [{ name: "Sled Push", muscles: "Legs, Glutes, Core", equipment: "Sled", sets: 3, reps: 20, rest: 60 }],
        ],
    },
    advanced: {
        bodyweight: [
            [{ name: "Long Distance Running", muscles: "Legs", equipment: "None", sets: 1, reps: "60 minutes", rest: 0 }],
            [{ name: "HIIT Training", muscles: "Full body", equipment: "None", sets: 4, reps: 20, rest: 10 }],
            [{ name: "Sprints", muscles: "Legs", equipment: "None", sets: 8, reps: 100, rest: 60 }],
            [{ name: "Plyometric Circuit", muscles: "Full Body", equipment: "None", sets: 3, reps: 10, rest: 60 }],
            [{ name: "Hill Sprints", muscles: "Legs, Glutes", equipment: "Hill", sets: 6, reps: 50, rest: 90 }],
            [{ name: "Muscle Ups", muscles: "Back, Chest, Arms", equipment: "Bar", sets: 5, reps: "AMRAP", rest: 120 }],
        ],
        dumbbells: [
            [{ name: "Dumbbell Complex", muscles: "Full Body", equipment: "Dumbbells", sets: 4, reps: 8, rest: 60 }],
            [{ name: "Dumbbell Snatch and Overhead Squat", muscles: "Full Body", equipment: "Dumbbells", sets: 4, reps: 6, rest: 90 }],
            [{ name: "Dumbbell Farmer's Walk", muscles: "Full Body", equipment: "Dumbbells", sets: 3, reps: 50, rest: 90 }],
            [{ name: "Dumbbell Thruster Ladder", muscles: "Full Body", equipment: "Dumbbells", sets: 1, reps: "Ladder", rest: 120 }],
            [{ name: "Dumbbell Turkish Get ups", muscles: "Full Body", equipment: "Dumbbells", sets: 3, reps: 5, rest: 90 }],
        ],
        gym: [
            [{ name: "Interval Rowing", muscles: "Full Body", equipment: "Rowing Machine", sets: 5, reps: 500, rest: 120 }],
            [{ name: "High Intensity Assault Bike Intervals", muscles: "Legs, Arms", equipment: "Assault Bike", sets: 6, reps: 30, rest: 60 }],
            [{ name: "Loaded Sled Pushes", muscles: "Legs, Glutes, Core", equipment: "Sled", sets: 5, reps: 50, rest: 120 }],
            [{ name: "Ski Erg Intervals", muscles: "Full Body", equipment: "Ski Erg", sets: 4, reps: 40, rest: 90 }],
            [{ name: "VersaClimber Intervals", muscles: "Full Body", equipment: "VersaClimber", sets: 4, reps: 30, rest: 90 }],
        ],
    },
},
fatloss: {
    beginner: {
        bodyweight: [
            [{ name: "Jumping Jacks", muscles: "Full body", equipment: "None", sets: 3, reps: 30, rest: 30 }],
            [{ name: "Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 15, rest: 45 }],
            [{ name: "Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 3, reps: 12, rest: 45 }],
            [{ name: "High Knees", muscles: "Legs, Core", equipment: "None", sets: 3, reps: 30, rest: 30 }],
            [{ name: "Walking Lunges", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 10, rest: 30 }],
            [{ name: "Plank", muscles: "Core", equipment: "None", sets: 3, reps: 30, rest: 30 }],
        ],
        dumbbells: [
            [{ name: "Dumbbell Squat to Press", muscles: "Full Body", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45 }],
            [{ name: "Dumbbell Rows", muscles: "Back, Biceps", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45 }],
            [{ name: "Dumbbell Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Dumbbells", sets: 3, reps: 15, rest: 45 }],
            [{ name: "Dumbbell Thrusters", muscles: "Full Body", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45 }],
            [{ name: "Dumbbell Step ups", muscles: "Quads, Glutes", equipment: "Dumbbells, Step", sets: 3, reps: 10, rest: 30 }],
        ],
        gym: [
            [{ name: "Treadmill Walk or Jog", muscles: "Legs", equipment: "Treadmill", sets: 1, reps: "20 minutes", rest: 0 }],
            [{ name: "Elliptical Trainer", muscles: "Full Body", equipment: "Elliptical", sets: 1, reps: "20 minutes", rest: 0 }],
            [{ name: "Stationary Bike", muscles: "Legs", equipment: "Stationary Bike", sets: 1, reps: "20 minutes", rest: 0 }],
            [{ name: "Rowing Machine", muscles: "Full Body", equipment: "Rowing Machine", sets: 1, reps: "15 minutes", rest: 0 }],
            [{ name: "Leg Press Machine", muscles: "Quads, Glutes", equipment: "Leg Press", sets: 3, reps: 15, rest: 45 }],
        ],
    },
intermediate: {
    bodyweight: [
        [{ name: "Burpees", muscles: "Full body", equipment: "None", sets: 3, reps: 30, rest: 30 }],
        [{ name: "Mountain Climbers", muscles: "Core, Legs", equipment: "None", sets: 3, reps: 30, rest: 30 }],
        [{ name: "Lunges", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 15, rest: 45 }],
        [{ name: "Jump Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 15, rest: 45 }],
        [{ name: "High Plank Jacks", muscles: "Core, Shoulders", equipment: "None", sets: 3, reps: 20, rest: 30 }],
        [{ name: "Skater Jumps", muscles: "Legs, Glutes", equipment: "None", sets: 3, reps: 15, rest: 30 }],
    ],
    dumbbells: [
        [{ name: "Dumbbell Snatches", muscles: "Full Body", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45 }],
        [{ name: "Dumbbell Push Press", muscles: "Shoulders, Triceps, Legs", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45 }],
        [{ name: "Dumbbell Renegade Rows", muscles: "Back, Core, Biceps", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45 }],
        [{ name: "Dumbbell Walking Lunges", muscles: "Quads, Glutes", equipment: "Dumbbells", sets: 3, reps: 10, rest: 30 }],
        [{ name: "Dumbbell Burpees", muscles: "Full Body", equipment: "Dumbbells", sets: 3, reps: 8, rest: 45 }],
    ],
    gym: [
        [{ name: "Rowing Machine Intervals", muscles: "Full Body", equipment: "Rowing Machine", sets: 4, reps: 500, rest: 60 }],
        [{ name: "Assault Bike Intervals", muscles: "Legs, Arms", equipment: "Assault Bike", sets: 4, reps: 30, rest: 60 }],
        [{ name: "Stair Climber Intervals", muscles: "Legs, Glutes", equipment: "Stair Climber", sets: 4, reps: 20, rest: 60 }],
        [{ name: "Battle Ropes", muscles: "Shoulders, Arms, Core", equipment: "Battle Ropes", sets: 3, reps: 30, rest: 45 }],
        [{ name: "Sled Push", muscles: "Legs, Glutes, Core", equipment: "Sled", sets: 3, reps: 20, rest: 60 }],
    ],
},
advanced: {
    bodyweight: [
        [{ name: "High Intensity Burpee Variations", muscles: "Full Body", equipment: "None", sets: 4, reps: 20, rest: 30 }],
        [{ name: "Advanced Plyometric Circuit", muscles: "Full Body", equipment: "None", sets: 4, reps: 15, rest: 45 }],
        [{ name: "Complex Bodyweight Movements", muscles: "Full Body", equipment: "None", sets: 4, reps: 10, rest: 60 }],
        [{ name: "Sprint Intervals", muscles: "Legs", equipment: "Track/Open Space", sets: 6, reps: 100, rest: 60 }],
        [{ name: "Hill Sprints with Burpees", muscles: "Legs, Full Body", equipment: "Hill", sets: 5, reps: 50, rest: 90 }],
    ],
    dumbbells: [
        [{ name: "Dumbbell Complex Circuit", muscles: "Full Body", equipment: "Dumbbells", sets: 4, reps: 10, rest: 60 }],
        [{ name: "Dumbbell Snatch and Overhead Squat Complex", muscles: "Full Body", equipment: "Dumbbells", sets: 4, reps: 8, rest: 60 }],
        [{ name: "Dumbbell Thruster Ladder", muscles: "Full Body", equipment: "Dumbbells", sets: 1, reps: "Ladder", rest: 120 }],
        [{ name: "Dumbbell Renegade Row Complex", muscles: "Back, Core", equipment: "Dumbbells", sets: 4, reps: 10, rest: 60 }],
        [{ name: "Dumbbell Turkish Get ups with Press", muscles: "Full Body", equipment: "Dumbbells", sets: 3, reps: 5, rest: 90 }],
    ],
    gym: [
        [{ name: "HIIT on Treadmill", muscles: "Legs, Full body", equipment: "Treadmill", sets: 5, reps: 30, rest: 30 }],
        [{ name: "Rowing Machine Intervals", muscles: "Full body", equipment: "Rowing Machine", sets: 5, reps: 500, rest: 60 }],
        [{ name: "Kettlebell Swings", muscles: "Glutes, Hamstrings, Core", equipment: "Kettlebell", sets: 4, reps: 20, rest: 45 }],
        [{ name: "Assault Bike Intervals", muscles: "Legs, Arms", equipment: "Assault Bike", sets: 6, reps: 30, rest: 60 }],
        [{ name: "Ski Erg Intervals", muscles: "Full Body", equipment: "Ski Erg", sets: 5, reps: 40, rest: 60 }],
    ],
  },
},
calisthenics: {
    beginner: [
        [{ name: "Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 12, rest: 60 }],
        [{ name: "Lunges", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 12, rest: 60 }],
        [{ name: "Plank", muscles: "Core", equipment: "None", sets: 3, reps: "30 sec", rest: 60 }],
        [{ name: "Incline Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "Elevated Surface", sets: 3, reps: 12, rest: 60 }],
        [{ name: "Glute Bridges", muscles: "Glutes, Hamstrings", equipment: "None", sets: 3, reps: 15, rest: 60 }],
        [{ name: "Crunches", muscles: "Abs", equipment: "None", sets: 3, reps: 15, rest: 60 }],
        [{ name: "Supermans", muscles: "Lower Back", equipment: "None", sets: 3, reps: 15, rest: 60 }],
        [{ name: "Wall Sit", muscles: "Quads", equipment: "Wall", sets: 3, reps: "30 sec", rest: 60 }],
        [{ name: "Knee Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 3, reps: 15, rest: 60 }],
        [{ name: "Russian Twists", muscles: "Obliques", equipment: "None", sets: 3, reps: 12, rest: 60 }],
        [{ name: "Bird Dog", muscles: "Core, Glutes, Lower Back", equipment: "None", sets: 3, reps: 10, rest: 60 }],
        [{ name: "Calf Raises", muscles: "Calves", equipment: "None", sets: 3, reps: 15, rest: 45 }],
        [{ name: "Hip Thrusts", muscles: "Glutes", equipment: "None", sets: 3, reps: 15, rest: 60 }],
        [{ name: "Reverse Crunches", muscles: "Lower Abs", equipment: "None", sets: 3, reps: 12, rest: 60 }],
        [{ name: "Bodyweight Rows Inverted Rows", muscles: "Back, Biceps", equipment: "Table/Bar", sets: 3, reps: 8, rest: 60 }],
        [{ name: "Side Plank", muscles: "Obliques", equipment: "None", sets: 3, reps: "20 sec", rest: 60 }],
        [{ name: "Donkey Kicks", muscles: "Glutes", equipment: "None", sets: 3, reps: 15, rest: 45 }],
        [{ name: "Lateral Lunges", muscles: "Quads, Glutes, Adductors", equipment: "None", sets: 3, reps: 10, rest: 60 }],
        [{ name: "Bear Crawls", muscles: "Full Body", equipment: "None", sets: 3, reps: 20, rest: 60 }],
        [{ name: "Assisted Dips", muscles: "Chest, Triceps, Shoulders", equipment: "Assisted Dip Machine", sets: 3, reps: 8, rest: 60 }],
        [{ name: "Band Assisted Pull ups", muscles: "Back, Biceps", equipment: "Resistance Band", sets: 3, reps: 8, rest: 60 }],
        [{ name: "Band Assisted Dips", muscles: "Chest, Triceps, Shoulders", equipment: "Resistance Band", sets: 3, reps: 8, rest: 60 }],
        [{ name: "Negative Pull ups", muscles: "Back, Biceps", equipment: "Pull-up Bar", sets: 3, reps: 5, rest: 60 }],
        [{ name: "Negative Dips", muscles: "Chest, Triceps, Shoulders", equipment: "Dip Bars", sets: 3, reps: 5, rest: 60 }],
        [{ name: "Incline Rows Assisted", muscles: "Back, Biceps", equipment: "Table/Bar", sets: 3, reps: 10, rest: 60 }],
        [{ name: "Elevated Pike Push ups Assisted", muscles: "Shoulders, Triceps", equipment: "Elevated Surface", sets: 3, reps: 8, rest: 60 }],
        [{ name: "Wall Assisted Handstand Holds", muscles: "Shoulders, Core", equipment: "Wall", sets: 3, reps: "15 sec", rest: 60 }],
        [{ name: "Band Assisted Squats", muscles: "Quads, Glutes", equipment: "Resistance Band", sets: 3, reps: 12, rest: 60 }],
    ],
 intermediate: [
    [{ name: "Dips", muscles: "Chest, Triceps, Shoulders", equipment: "Gym", sets: 3, reps: 10, rest: 90 }],
    [{ name: "Pistol Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 6, rest: 90 }],
    [{ name: "Handstand Practice", muscles: "Shoulders, Core", equipment: "None", sets: 3, reps: "30 sec", rest: 90 }],
    [{ name: "Archer Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 3, reps: 6, rest: 90 }],
    [{ name: "Australian Pull ups", muscles: "Back, Biceps", equipment: "Bar", sets: 3, reps: 12, rest: 60 }],
    [{ name: "L-Sit Holds", muscles: "Core, Hips", equipment: "Parallel Bars/Floor", sets: 3, reps: "20 sec", rest: 90 }],
    [{ name: "Elevated Pike Push ups", muscles: "Shoulders, Triceps", equipment: "Elevated Surface", sets: 3, reps: 8, rest: 90 }],
    [{ name: "Jump Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 10, rest: 60 }],
    [{ name: "Close Grip Push ups", muscles: "Triceps, Chest", equipment: "None", sets: 3, reps: 12, rest: 60 }],
    [{ name: "Weighted Dips Light", muscles: "Chest, Triceps, Shoulders", equipment: "Weighted Belt", sets: 3, reps: 6, rest: 90 }],
],
advanced: [
    [{ name: "Front Lever", muscles: "Back, Core", equipment: "Gym", sets: 3, reps: "15 sec", rest: 120 }],
    [{ name: "One Arm Pull ups", muscles: "Back, Biceps", equipment: "Gym", sets: 3, reps: 3, rest: 120 }],
    [{ name: "Planche", muscles: "Chest, Triceps, Shoulders, Core", equipment: "None", sets: 3, reps: "10 sec", rest: 120 }],
    [{ name: "One Arm Handstand Push ups", muscles: "Shoulders, Triceps", equipment: "Wall", sets: 3, reps: 3, rest: 120 }],
    [{ name: "Victorian Cross", muscles: "Chest, Shoulders, Core", equipment: "Rings/Bars", sets: 3, reps: "5 sec", rest: 180 }],
    [{ name: "Human Flag", muscles: "Obliques, Core, Shoulders", equipment: "Pole/Bar", sets: 3, reps: "5 sec", rest: 180 }],
    [{ name: "90 Degree Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 3, reps: 5, rest: 120 }],
    [{ name: "Back Lever", muscles: "Back, Core", equipment: "Rings/Bar", sets: 3, reps: "10 sec", rest: 120 }],
    [{ name: "Weighted Pull ups", muscles: "Back, Biceps", equipment: "Weighted Belt", sets: 4, reps: 5, rest: 120 }],
    [{ name: "Weighted Dips", muscles: "Chest, Triceps, Shoulders", equipment: "Weighted Belt", sets: 4, reps: 8, rest: 120 }],
    [{ name: "Weighted Pistol Squats", muscles: "Quads, Glutes", equipment: "Dumbbell/Kettlebell", sets: 3, reps: 5, rest: 120 }],
    [{ name: "Weighted Archer Pull ups", muscles: "Back, Biceps", equipment: "Weighted Belt", sets: 3, reps: 4, rest: 120 }],
    [{ name: "Weighted Australian Pull ups", muscles: "Back, Biceps", equipment: "Weighted Vest", sets: 3, reps: 10, rest: 90 }],
    [{ name: "Weighted L Sit Holds", muscles: "Core, Hips", equipment: "Ankle Weights", sets: 3, reps: "15 sec", rest: 120 }],
    [{ name: "Weighted Pike Push ups", muscles: "Shoulders, Triceps", equipment: "Weighted Vest", sets: 3, reps: 6, rest: 120 }],
    [{ name: "Weighted Close Grip Push ups", muscles: "Triceps, Chest", equipment: "Weighted Vest/Plate", sets: 3, reps: 10, rest: 90 }],
    [{ name: "Weighted Back Lever Pulls", muscles: "Back, Core", equipment: "Weighted Vest", sets: 3, reps: 5, rest: 120 }],
],
powerlifting_5x5: {
    beginner: [
        [{ name: "Barbell Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 5, reps: 5, rest: 180 }],
        [{ name: "Barbell Bench Press", muscles: "Chest, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 180 }],
        [{ name: "Barbell Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 5, reps: 5, rest: 180 }],
        [{ name: "Overhead Press", muscles: "Shoulders", equipment: "Barbell", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Barbell", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Front Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 5, reps: 5, rest: 180 }],
        [{ name: "Incline Barbell Bench Press", muscles: "Upper Chest, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 180 }],
        [{ name: "Pendlay Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 5, reps: 5, rest: 180 }],
        [{ name: "Arnold Press", muscles: "Shoulders", equipment: "Dumbbells", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Good Mornings", muscles: "Lower Back, Hamstrings", equipment: "Barbell", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Paused Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 5, reps: 5, rest: 180 }],
        [{ name: "Decline Barbell Bench Press", muscles: "Lower Chest, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 180 }],
        [{ name: "Chest Supported Rows", muscles: "Back, Biceps", equipment: "Dumbbell", sets: 5, reps: 5, rest: 180 }],
        [{ name: "Lateral Raises", muscles: "Side Deltoids", equipment: "Dumbbells", sets: 3, reps: 10, rest: 120 }],
        [{ name: "Glute Bridges", muscles: "Glutes", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90 }],
    ],
    intermediate: [
        [{ name: "Barbell Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Barbell Bench Press", muscles: "Chest, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Barbell Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Overhead Press", muscles: "Shoulders", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Barbell", sets: 1, reps: 5, rest: 240 }],
        [{ name: "Pull ups", muscles: "Back, Biceps", equipment: "Pull-up Bar", sets: 3, reps: "AMRAP", rest: 180 }],
        [{ name: "Front Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Incline Barbell Bench Press", muscles: "Upper Chest, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Pendlay Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Push Press", muscles: "Shoulders, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Sumo Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Barbell", sets: 1, reps: 5, rest: 240 }],
        [{ name: "Dips", muscles: "Chest, Triceps", equipment: "Dip Bar", sets: 3, reps: "AMRAP", rest: 180 }],
        [{ name: "Paused Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Decline Barbell Bench Press", muscles: "Lower Chest, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Chest Supported Rows", muscles: "Back, Biceps", equipment: "Dumbbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Behind the Neck Press", muscles: "Shoulders", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Snatch Grip Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Barbell", sets: 1, reps: 5, rest: 240 }],
        [{ name: "Weighted Pull ups", muscles: "Back, Biceps", equipment: "Pull up Bar, Weight", sets: 3, reps: 5, rest: 180 }],
    ],
    advanced: [
        [{ name: "Barbell Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Barbell Bench Press", muscles: "Chest, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Barbell Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Overhead Press", muscles: "Shoulders", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Barbell", sets: 1, reps: 5, rest: 240 }],
        [{ name: "Weighted Pull ups", muscles: "Back, Biceps", equipment: "Pull up Bar, Weight", sets: 3, reps: 5, rest: 180 }],
        [{ name: "Weighted Dips", muscles: "Chest, Triceps", equipment: "Dip Bar, Weight", sets: 3, reps: 5, rest: 180 }],
        [{ name: "Front Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Incline Barbell Bench Press", muscles: "Upper Chest, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Pendlay Rows", muscles: "Back, Biceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Push Press", muscles: "Shoulders, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Sumo Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Barbell", sets: 1, reps: 5, rest: 240 }],
        [{ name: "Romanian Deadlifts", muscles: "Hamstrings, Glutes", equipment: "Barbell", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Muscle Ups", muscles: "Back, Chest, Shoulders, Triceps", equipment: "Pull-up Bar", sets: 3, reps: "AMRAP", rest: 180 }],
        [{ name: "Paused Squats", muscles: "Quads, Glutes", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Decline Barbell Bench Press", muscles: "Lower Chest, Triceps", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Chest Supported Rows", muscles: "Back, Biceps", equipment: "Dumbbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Behind the Neck Press", muscles: "Shoulders", equipment: "Barbell", sets: 5, reps: 5, rest: 240 }],
        [{ name: "Snatch Grip Deadlifts", muscles: "Back, Glutes, Hamstrings", equipment: "Barbell", sets: 1, reps: 5, rest: 240 }],
        [{ name: "Good Mornings", muscles: "Lower Back, Hamstrings", equipment: "Barbell", sets: 3, reps: 8, rest: 120 }],
        [{ name: "Weighted Pull ups", muscles: "Back, Biceps", equipment: "Pull up Bar, Weight", sets: 3, reps: 5, rest: 180 }],
    ],
},
hiit: {
    beginner: [
        [{ name: "Jumping Jacks", muscles: "Full body", equipment: "None", sets: 5, reps: "30 sec", rest: 30 }],
        [{ name: "High Knees", muscles: "Legs", equipment: "None", sets: 5, reps: "30 sec", rest: 30 }],
        [{ name: "Butt Kicks", muscles: "Hamstrings, Glutes", equipment: "None", sets: 5, reps: "30 sec", rest: 30 }],
        [{ name: "Mountain Climbers", muscles: "Core, Legs, Shoulders", equipment: "None", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "Squat Jumps", muscles: "Quads, Glutes", equipment: "None", sets: 5, reps: "15 sec", rest: 45 }],
        [{ name: "Plank Jacks", muscles: "Core, Shoulders", equipment: "None", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "Skater Jumps", muscles: "Legs, Glutes", equipment: "None", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "Burpees", muscles: "Full body", equipment: "None", sets: 5, reps: "10 sec", rest: 50 }],
    ],
    intermediate: [
        [{ name: "Burpees", muscles: "Full body", equipment: "None", sets: 5, reps: "30 sec", rest: 30 }],
        [{ name: "Mountain Climbers", muscles: "Core, Legs", equipment: "None", sets: 5, reps: "30 sec", rest: 30 }],
        [{ name: "Jump Squats", muscles: "Quads, Glutes", equipment: "None", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "High Plank Jacks", muscles: "Core, Shoulders", equipment: "None", sets: 5, reps: "25 sec", rest: 35 }],
        [{ name: "Skater Jumps", muscles: "Legs, Glutes", equipment: "None", sets: 5, reps: "25 sec", rest: 35 }],
        [{ name: "Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "Dumbbell Thrusters", muscles: "Full body", equipment: "Dumbbells", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "Kettlebell Swings", muscles: "Glutes, Hamstrings, Shoulders", equipment: "Kettlebell", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "Box Jumps", muscles: "Quads, Glutes, Calves", equipment: "Box/Step", sets: 5, reps: "15 sec", rest: 45 }],
    ],
    advanced: [
        [{ name: "Sprints", muscles: "Legs", equipment: "None", sets: 5, reps: "30 sec", rest: 30 }],
        [{ name: "Kettlebell Swings", muscles: "Glutes, Hamstrings, Core", equipment: "Kettlebell", sets: 5, reps: "30 sec", rest: 30 }],
        [{ name: "Burpee Box Jumps", muscles: "Full body", equipment: "Box/Step", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "Thruster Burpees", muscles: "Full body", equipment: "Dumbbells", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "Double Unders", muscles: "Calves, Full body", equipment: "Jump Rope", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "Muscle ups", muscles: "Full body", equipment: "Pull-up Bar", sets: 5, reps: "AMRAP", rest: 60 }],
        [{ name: "Pistol Squats Alternating", muscles: "Quads, Glutes, Core", equipment: "None", sets: 5, reps: "20 sec", rest: 40 }],
        [{ name: "Weighted Pull ups", muscles: "Back, Biceps", equipment: "Pull-up Bar, Weights", sets: 5, reps: "AMRAP", rest: 60 }],
        [{ name: "Handstand Push ups", muscles: "Shoulders, Triceps, Core", equipment: "Wall (Optional)", sets: 5, reps: "15 sec", rest: 45 }],
    ],
},
circuit: {
    beginner: [
        [{ name: "Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 10, rest: 15 }],
        [{ name: "Push ups", muscles: "Chest, Triceps, Shoulders", equipment: "None", sets: 3, reps: 10, rest: 15 }],
        [{ name: "Lunges each leg", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 10, rest: 15 }],
        [{ name: "Plank", muscles: "Core", equipment: "None", sets: 3, reps: "30 sec", rest: 15 }],
        [{ name: "Jumping Jacks", muscles: "Full body", equipment: "None", sets: 3, reps: 30, rest: 15 }],
        [{ name: "High Knees", muscles: "Legs, Core", equipment: "None", sets: 3, reps: 30, rest: 15 }],
        [{ name: "Butt Kicks", muscles: "Hamstrings, Glutes", equipment: "None", sets: 3, reps: 30, rest: 15 }],
        [{ name: "Crunches", muscles: "Abs", equipment: "None", sets: 3, reps: 15, rest: 15 }],
        [{ name: "Glute Bridges", muscles: "Glutes, Hamstrings", equipment: "None", sets: 3, reps: 15, rest: 15 }],
        [{ name: "Mountain Climbers", muscles: "Core, Legs", equipment: "None", sets: 3, reps: 20, rest: 15 }],
        [{ name: "Wall Sit", muscles: "Quads", equipment: "Wall", sets: 3, reps: "30 sec", rest: 15 }],
        [{ name: "Bodyweight Rows using table", muscles: "Back, Biceps", equipment: "Table", sets: 3, reps: 10, rest: 15 }],
    ],
    intermediate: [
        [{ name: "Jump Squats", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 12, rest: 20 }],
        [{ name: "Diamond Push ups", muscles: "Chest, Triceps", equipment: "None", sets: 3, reps: 10, rest: 20 }],
        [{ name: "Walking Lunges each leg", muscles: "Quads, Glutes", equipment: "None", sets: 3, reps: 12, rest: 20 }],
        [{ name: "Plank with Shoulder Taps", muscles: "Core, Shoulders", equipment: "None", sets: 3, reps: 10, rest: 20 }],
        [{ name: "Burpees", muscles: "Full body", equipment: "None", sets: 3, reps: 10, rest: 20 }],
        [{ name: "Dumbbell Rows", muscles: "Back, Biceps", equipment: "Dumbbells", sets: 3, reps: 12, rest: 20 }],
        [{ name: "Dumbbell Thrusters", muscles: "Full body", equipment: "Dumbbells", sets: 3, reps: 10, rest: 20 }],
        [{ name: "Russian Twists", muscles: "Obliques", equipment: "None (or Weight)", sets: 3, reps: 20, rest: 20 }],
        [{ name: "Box Jumps", muscles: "Quads, Glutes, Calves", equipment: "Box/Step", sets: 3, reps: 8, rest: 20 }],
        [{ name: "Inverted Rows", muscles: "Back, Biceps", equipment: "Bar/Table", sets: 3, reps: 10, rest: 20 }],
        [{ name: "Plank with Leg Raises", muscles: "Core, Glutes", equipment: "None", sets: 3, reps: 10, rest: 20 }],
        [{ name: "Kettlebell Swings", muscles: "Glutes, Hamstrings, Shoulders", equipment: "Kettlebell", sets: 3, reps: 12, rest: 20 }],
    ],
    advanced: [
        [{ name: "Burpee Box Jumps", muscles: "Full body", equipment: "Box/Step", sets: 3, reps: 8, rest: 25 }],
        [{ name: "Handstand Push ups", muscles: "Shoulders, Triceps, Core", equipment: "Wall (Optional)", sets: 3, reps: 6, rest: 25 }],
        [{ name: "Pistol Squats Alternating", muscles: "Quads, Glutes, Core", equipment: "None", sets: 3, reps: 8, rest: 25 }],
        [{ name: "Muscle ups", muscles: "Full body", equipment: "Pull-up Bar", sets: 3, reps: "AMRAP", rest: 25 }],
        [{ name: "Weighted Pull ups", muscles: "Back, Biceps", equipment: "Pull-up Bar, Weights", sets: 3, reps: 6, rest: 25 }],
        [{ name: "Thruster Burpees", muscles: "Full body", equipment: "Dumbbells", sets: 3, reps: 8, rest: 25 }],
        [{ name: "Double Unders", muscles: "Calves, Full body", equipment: "Jump Rope", sets: 3, reps: 20, rest: 25 }],
        [{ name: "Toes to Bar", muscles: "Abs, Grip", equipment: "Pull-up Bar", sets: 3, reps: 8, rest: 25 }],
        [{ name: "Turkish Get ups", muscles: "Full body", equipment: "Kettlebell (or Dumbbell)", sets: 3, reps: 5, rest: 25 }],
        [{ name: "Snatches Dumbbell or Kettlebell", muscles: "Full body", equipment: "Dumbbell/Kettlebell", sets: 3, reps: 8, rest: 25 }],
        [{ name: "Front Squats Barbell", muscles: "Quads, Glutes, Core", equipment: "Barbell", sets: 3, reps: 8, rest: 25 }],
        [{ name: "Box Jump Overs", muscles: "Quads, Glutes, Calves", equipment: "Box/Step", sets: 3, reps: 8, rest: 25 }],
    ],
  },
};





/* ............................................... Function: Normalize Exercises ...................................................... */
        function normalizeExercises(exercisesArray) {
            if (!Array.isArray(exercisesArray)) {
                // If it's not an array, assume it's already normalized
                return exercisesArray;
            }
            return exercisesArray.map(exercise => {
                // Check if reps is a number or a string. If string, leave it as is.
                if (typeof exercise.reps === 'string' && exercise.reps.includes('sec')) {
                    return exercise;
                } else {
                    return {
                        name: exercise.name,
                        muscles: exercise.muscles,
                        equipment: exercise.equipment,
                        sets: exercise.sets,
                        reps: exercise.reps,
                        rest: exercise.rest,
                    };
                }
            });
        }

        /* ............................................... Function: Handle Modality Change ...................................................... */

        document.getElementById("modality").addEventListener("change", function () {
            const goalSelect = document.getElementById("goal");
            if (this.value === "powerlifting_5x5" || this.value === "hiit" || this.value === "circuit" || this.value === "calisthenics") {
                goalSelect.value = "strength"; // Or any default value you prefer
                goalSelect.disabled = true;
                goalSelect.style.color = "#aaa"; // Gray out the text
                goalSelect.style.backgroundColor = "#eee"; // Gray out the background
            } else {
                goalSelect.disabled = false;
                goalSelect.style.color = ""; // Reset to default color
                goalSelect.style.backgroundColor = ""; // Reset to default background
            }
        });

        // Disable the copy button initially
        document.getElementById("copy-workout").disabled = true;

        // Add event listener for workout generation
        document.getElementById("generate-workout").addEventListener("click", function () {
            const goal = document.getElementById("goal").value;
            const experience = document.getElementById("experience").value;
            const modality = document.getElementById("modality").value;
            const resultDiv = document.getElementById("workout-result");
            resultDiv.innerHTML = "";

            let selectedExercises = [];

            // The logic for selecting exercises remains the same
            if (exercises[modality]) {
                if (exercises[modality][experience]) {
                    selectedExercises = normalizeExercises(exercises[modality][experience]);
                } else if (exercises[modality].all) {
                    selectedExercises = normalizeExercises(exercises[modality].all);
                } else {
                    selectedExercises = normalizeExercises(exercises[modality]);
                }
            } else {
                if (goal && experience && exercises[goal] && exercises[goal][experience]) {
                    const levelExercises = exercises[goal][experience];
                    for (const key in levelExercises) {
                        if (Array.isArray(levelExercises[key])) {
                            selectedExercises = selectedExercises.concat(normalizeExercises(levelExercises[key]));
                        }
                    }
                } else {
                    resultDiv.textContent = "No exercises found for your selected criteria.";
                    return;
                }
            }

            if (selectedExercises.length === 0) {
                resultDiv.textContent = "No exercises found for your selected criteria.";
                return;
            }

            const workout = [];
            let availableExercises = [...selectedExercises];

            // Always select 5 random exercises regardless of modality
            for (let i = 0; i < 5 && availableExercises.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * availableExercises.length);
                workout.push(availableExercises.splice(randomIndex, 1)[0]);
            }

            let totalWorkoutTime = 0;
            let repTime = 2; // Average time per rep in seconds

            let workoutHTML = "<br><center><h3><u>YOUR WORKOUT</u></h3></center><ul>";
            let workoutTextForCopy = ""; // Initialize text for copy

workout.forEach(ex => {
        workoutHTML += `<br><br><li><b>${ex.name}</b>`;
        workoutTextForCopy += `${ex.name}`;

        if (ex.sets && ex.reps) {
            workoutHTML += ` - Reps: ${ex.sets}x${ex.reps}`;
            workoutTextForCopy += ` - Reps: ${ex.sets}x${ex.reps}`;
        }
        if (ex.rest) {
            workoutHTML += ` - Rest: ${ex.rest} seconds`;
            workoutHTML += `--- Muscles: ${ex.muscles}`; // Added <br><br>
            workoutHTML += `. Equipment: ${ex.equipment}`;
            workoutTextForCopy += ` - Rest: ${ex.rest} seconds. Muscles: ${ex.muscles}. Equipment: ${ex.equipment}`;

   if (typeof ex.reps === 'number') {
                totalWorkoutTime += ex.sets * ex.reps * repTime;
            } else if (typeof ex.reps === 'string' && ex.reps.includes('sec')) {
                const seconds = parseInt(ex.reps.match(/\d+/)[0]);
                if (!isNaN(seconds)) {
                    totalWorkoutTime += ex.sets * seconds;
                }
            } else if (typeof ex.reps === 'string' && ex.reps === "AMRAP") {
                totalWorkoutTime += ex.sets * 60; // Default 60 seconds.
            } else if (typeof ex.reps === 'string' && ex.reps.includes('minutes')) {
                const minutes = parseInt(ex.reps.split(' ')[0]);
                if (!isNaN(minutes)) {
                    totalWorkoutTime += ex.sets * minutes * 60;
                }
            }
            totalWorkoutTime += ex.sets * ex.rest;
        } else if (ex.duration && ex.timeUnit === "sec") {
            if (!isNaN(ex.duration)) {
                totalWorkoutTime += ex.sets * ex.duration;
            }
        } else {
            totalWorkoutTime += 120; // Default time
        }
  const repsAndWtInput = "Reps & Wt. Per Set:_____x_____|_____x_____|_____x_____|_____x_____|_____x_____";
        workoutHTML += `<br>${repsAndWtInput}</li>`;
        workoutTextForCopy += `\n${repsAndWtInput}\n`;
    });

            const minutes = Math.round(totalWorkoutTime / 60);
            workoutHTML += `<p><i>Estimated Workout Time: ${minutes} minutes</i></p>`;
            workoutTextForCopy += `\nEstimated Workout Time: ${minutes} minutes`;

            resultDiv.innerHTML = DOMPurify.sanitize(workoutHTML);

            // Enable the copy button after the workout is generated
            document.getElementById("copy-workout").disabled = false;

            // Set the workoutTextForCopy variable to be used in the copy function
            window.workoutTextForCopy = workoutTextForCopy;
        });

        // Add event listener for copy to clipboard button
        document.getElementById("copy-workout").addEventListener("click", function () {
            const workoutContent = window.workoutTextForCopy;
            navigator.clipboard.writeText(workoutContent).then(() => {
                alert("Workout copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        });

        /* ............................................... Function: Generate Workout ...................................................... */

        // Function to copy workout and display alert
        function copyWorkoutToClipboard(workoutText) {
            navigator.clipboard.writeText(workoutText).then(() => {
                const alertDiv = document.createElement('div');
                alertDiv.textContent = "Workout copied to clipboard!";
                alertDiv.style.position = 'fixed';
                alertDiv.style.top = '20px';
                alertDiv.style.left = '50%';
                alertDiv.style.transform = 'translateX(-50%)';
                alertDiv.style.backgroundColor = '#e0f7fa';
                alertDiv.style.padding = '10px';
                alertDiv.style.border = '1px solid #b2ebf2';
                alertDiv.style.borderRadius = '5px';
                document.body.appendChild(alertDiv);

                setTimeout(function () {
                    alertDiv.remove();
                }, 3000);
            }).catch(err => {
                console.error("Failed to copy: ", err);
                alert("Failed to copy workout to clipboard.");
            });
        }
        document.getElementById("generate-workout").addEventListener("click", function () {
            //... (rest of generate-workout function)
            resultDiv.innerHTML = DOMPurify.sanitize(workoutHTML);
            copyWorkoutToClipboard(workoutTextForCopy);
        });

        /* ......................................... Function: Combines Exercise Array & Generates Workout Table ................................................. */

function populateExerciseTable() {
    const tableBody = document.getElementById("exercise-table-body");
    tableBody.innerHTML = ""; // Clear previous entries

    let allExercises = [];
    let seenExercises = new Set(); // Set to track unique exercises by name

    // Collect all exercises into a single array
    for (const category in exercises) {
        for (const level in exercises[category]) {
            for (const type in exercises[category][level]) {
                const exerciseList = exercises[category][level][type];
                if (Array.isArray(exerciseList)) {
                    exerciseList.forEach(exercise => {
                        const normalizedName = exercise.name.trim().toLowerCase();
                        if (!seenExercises.has(normalizedName)) {
                            allExercises.push(exercise);
                            seenExercises.add(normalizedName);
                        }
                    });
                } else {
                    console.warn(`Expected an array, but found: ${typeof exerciseList} for ${category} > ${level} > ${type}`);
                }
            }
        }
    }

    // Sort and populate the table
    allExercises.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    allExercises.forEach(exercise => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <button class="copy-exercise" data-exercise="${exercise.name} - Reps: ${exercise.sets}x${exercise.reps} - Rest: ${exercise.rest} sec\nReps & Wt. Per Set:_____x_____|_____x_____|_____x_____|_____x_____|_____x_____">
                    ${exercise.name}
                </button>
            </td>
            <td>${exercise.muscles}</td>
            <td>${exercise.equipment}</td>
            <td>${exercise.sets}</td>
            <td>${exercise.reps}</td>
            <td>${exercise.rest}</td>
        `;
        tableBody.appendChild(row);
    });

    // Add event listeners for copy functionality
    document.querySelectorAll(".copy-exercise").forEach(button => {
        button.addEventListener("click", function () {
            const textToCopy = this.getAttribute("data-exercise");
            navigator.clipboard.writeText(textToCopy).then(() => {
                this.textContent = "Copied!";
                setTimeout(() => this.textContent = this.getAttribute("data-exercise").split(" - ")[0], 2000);
            }).catch(err => {
                console.error("Copy failed", err);
            });
        });
    });
}

        // Call populateExerciseTable() after the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', function () {
            populateExerciseTable();
        });










<!-- .................................Workout Chart Script..................................... -->

function validateWorkoutText(workoutText) {
            const errors = [];
            let isValid = true;

            // Basic validation: Check for empty input
            if (!workoutText.trim()) {
                errors.push("Workout text is empty.");
                isValid = false;
            }

            // Add more validation rules as needed
            // Example: Check for specific keywords or patterns
            if (workoutText.length > 10000) {
                errors.push("Workout text is too long.");
                isValid = false;
            }

            return { isValid, errors };
        }

document.getElementById('download-pdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    try {
        let workoutText = document.getElementById('paste-text').value;
        workoutText = DOMPurify.sanitize(workoutText);
        const validationResult = validateWorkoutText(workoutText);

        if (!validationResult.isValid) {
            alert("Workout text validation errors:\n" + validationResult.errors.join('\n'));
            return;
        }

        const validationResult2 = validateWorkoutText(workoutText);
        if (!validationResult2.isValid) {
            alert("Workout text validation errors after purify:\n" + validationResult2.errors.join('\n'));
            return;
        }

        // PDF Generation Logic
        const maxWidth = doc.internal.pageSize.getWidth() - 20; // 20 for margins
        const lineHeight = 10; // Adjust as needed
        let y = 10;

        doc.setFontSize(11); // Set font size to 14px

        const lines = workoutText.split('\n');
        lines.forEach(line => {
            const splitLines = doc.splitTextToSize(line, maxWidth);
            splitLines.forEach(splitLine => {
                doc.text(splitLine, 10, y);
                y += lineHeight;
            });
        });

        doc.save("workout.pdf");

    } catch (mainError) {
        console.error("Error generating PDF:", mainError);
        alert("An error occurred while generating the PDF.");
    }
});
