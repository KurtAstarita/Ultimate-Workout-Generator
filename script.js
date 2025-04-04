const exercises = {
    muscle: {
        beginner: {
            dumbbells: [
                { name: "Dumbbell Rows", sets: 3, reps: 10, rest: 60 },
                { name: "Dumbbell Bicep Curls", sets: 3, reps: 12, rest: 60 },
                { name: "Dumbbell Shoulder Press", sets: 3, reps: 10, rest: 60 },
                { name: "Dumbbell Lunges", sets: 3, reps: 12, rest: 60 },
                { name: "Dumbbell Chest Press", sets: 3, reps: 10, rest: 60 },
                { name: "Dumbbell Romanian Deadlifts", sets: 3, reps: 12, rest: 60 },
                { name: "Dumbbell Lateral Raises", sets: 3, reps: 15, rest: 60 },
                { name: "Dumbbell Hammer Curls", sets: 3, reps: 12, rest: 60 },
                { name: "Dumbbell Goblet Squats", sets: 3, reps: 12, rest: 60 },
                { name: "Dumbbell Triceps Extensions", sets: 3, reps: 12, rest: 60 },
            ],
            bodyweight: [
                { name: "Push ups", sets: 3, reps: 10, rest: 60 },
                { name: "Squats", sets: 3, reps: 12, rest: 60 },
                { name: "Lunges", sets: 3, reps: 12, rest: 60 },
                { name: "Plank", sets: 3, reps: "30 sec", rest: 60 },
                { name: "Crunches", sets: 3, reps: 15, rest: 60 },
                { name: "Glute Bridges", sets: 3, reps: 15, rest: 60 },
                { name: "Incline Push-ups", sets: 3, reps: 12, rest: 60 },
                { name: "Wall Sit", sets: 3, reps: "30 sec", rest: 60 },
                { name: "Leg Raises", sets: 3, reps: 12, rest: 60 },
                { name: "Superman", sets: 3, reps: 15, rest: 60 },
            ],
            machines: [
                { name: "Chest Press Machine", sets: 3, reps: 10, rest: 60 },
                { name: "Lat Pulldown Machine", sets: 3, reps: 10, rest: 60 },
                { name: "Leg Press Machine", sets: 3, reps: 12, rest: 60 },
                { name: "Seated Row Machine", sets: 3, reps: 10, rest: 60 },
                { name: "Shoulder Press Machine", sets: 3, reps: 10, rest: 60 },
                { name: "Leg Extension Machine", sets: 3, reps: 12, rest: 60 },
                { name: "Hamstring Curl Machine", sets: 3, reps: 12, rest: 60 },
                { name: "Calf Raise Machine", sets: 3, reps: 15, rest: 60 },
                { name: "Ab Crunch Machine", sets: 3, reps: 15, rest: 60 },
                { name: "Back Extension Machine", sets: 3, reps: 15, rest: 60 },
            ],
            barbells: [
                { name: "Barbell Bench Press", sets: 3, reps: 8, rest: 75 },
                { name: "Barbell Squats", sets: 3, reps: 8, rest: 75 },
                { name: "Barbell Rows", sets: 3, reps: 8, rest: 75 },
                { name: "Barbell Overhead Press", sets: 3, reps: 8, rest: 75 },
                { name: "Barbell Romanian Deadlifts", sets: 3, reps: 10, rest: 75 },
                { name: "Barbell Bicep Curls", sets: 3, reps: 10, rest: 75 },
                { name: "Barbell Triceps Extensions", sets: 3, reps: 10, rest: 75 },
                { name: "Barbell Lunges", sets: 3, reps: 10, rest: 75 },
                { name: "Barbell Shrugs", sets: 3, reps: 12, rest: 75 },
                { name: "Barbell Calf Raises", sets: 3, reps: 15, rest: 75 },
            ],
        },
        intermediate: {
            barbell: [
                { name: "Barbell Bench Press", sets: 4, reps: 8, rest: 90 },
                { name: "Barbell Squats", sets: 4, reps: 8, rest: 90 },
                { name: "Barbell Rows", sets: 4, reps: 8, rest: 90 },
                { name: "Barbell Overhead Press", sets: 4, reps: 8, rest: 90 },
                { name: "Barbell Deadlifts", sets: 3, reps: 6, rest: 120 },
                { name: "Barbell Romanian Deadlifts", sets: 4, reps: 10, rest: 90 },
                { name: "Barbell Hip Thrusts", sets: 4, reps: 10, rest: 90 },
                { name: "Barbell Lunges", sets: 4, reps: 10, rest: 90 },
                { name: "Barbell Shrugs", sets: 4, reps: 12, rest: 90 },
                { name: "Barbell Bicep Curls", sets: 4, reps: 10, rest: 90 },
            ],
            gym: [
                { name: "Lat Pulldowns", sets: 4, reps: 10, rest: 75 },
                { name: "Leg Press", sets: 4, reps: 10, rest: 75 },
                { name: "Cable Rows", sets: 4, reps: 10, rest: 75 },
                { name: "Chest Flyes", sets: 4, reps: 12, rest: 75 },
                { name: "Pull ups", sets: 3, reps: "25", rest: 90 },
                { name: "Dips", sets: 3, reps: "As Many As Possible", rest: 90 },
                { name: "Leg Extensions", sets: 4, reps: 12, rest: 75 },
                { name: "Hamstring Curls", sets: 4, reps: 12, rest: 75 },
                { name: "Cable Triceps Pushdowns", sets: 4, reps: 12, rest: 75 },
                { name: "Face Pulls", sets: 4, reps: 15, rest: 75 },
            ],
            dumbbells: [
                { name: "Dumbbell Bench Press", sets: 4, reps: 10, rest: 75 },
                { name: "Dumbbell Rows", sets: 4, reps: 10, rest: 75 },
                { name: "Dumbbell Shoulder Press", sets: 4, reps: 10, rest: 75 },
                { name: "Dumbbell Romanian Deadlifts", sets: 4, reps: 12, rest: 75 },
                { name: "Dumbbell Lunges", sets: 4, reps: 12, rest: 75 },
                { name: "Dumbbell Bicep Curls", sets: 4, reps: 12, rest: 75 },
                { name: "Dumbbell Hammer Curls", sets: 4, reps: 12, rest: 75 },
                { name: "Dumbbell Triceps Extensions", sets: 4, reps: 12, rest: 75 },
                { name: "Dumbbell Lateral Raises", sets: 4, reps: 15, rest: 75 },
                { name: "Dumbbell Goblet Squats", sets: 4, reps: 12, rest: 75 },
            ],
            bodyweight: [
                { name: "Push ups", sets: 4, reps: "25", rest: 75 },
                { name: "Squats", sets: 4, reps: 15, rest: 60 },
                { name: "Lunges", sets: 4, reps: 15, rest: 60 },
                { name: "Plank", sets: 4, reps: "45 sec", rest: 60 },
                { name: "Crunches", sets: 4, reps: 20, rest: 60 },
                { name: "Glute Bridges", sets: 4, reps: 20, rest: 60 },
                { name: "Incline Push ups", sets: 4, reps: 15, rest: 60 },
                { name: "Wall Sit", sets: 4, reps: "45 sec", rest: 60 },
                { name: "Leg Raises", sets: 4, reps: 15, rest: 60 },
                { name: "Superman", sets: 4, reps: 20, rest: 60 },
            ],
        },
        advanced: {
            gym: [
                { name: "Deadlifts", sets: 3, reps: 6, rest: 120 },
                { name: "Pull ups", sets: 3, reps: 8, rest: 120 },
                { name: "Overhead Press", sets: 3, reps: 8, rest: 120 },
                { name: "Barbell Hip Thrusts", sets: 3, reps: 10, rest: 120 },
                { name: "Weighted Pull ups", sets: 3, reps: 6, rest: 120 },
                { name: "Weighted Dips", sets: 3, reps: 6, rest: 120 },
                { name: "Barbell Rows Pendlay", sets: 3, reps: 8, rest: 120 },
                { name: "Incline Barbell Press", sets: 3, reps: 8, rest: 120 },
                { name: "Front Squats", sets: 3, reps: 8, rest: 120 },
                { name: "Romanian Deadlifts", sets: 3, reps: 10, rest: 120 },
            ],
            barbell: [
                { name: "Barbell Bench Press", sets: 4, reps: 6, rest: 120 },
                { name: "Barbell Squats", sets: 4, reps: 6, rest: 120 },
                { name: "Barbell Deadlifts", sets: 3, reps: 5, rest: 180 },
                { name: "Barbell Overhead Press", sets: 4, reps: 6, rest: 120 },
                { name: "Barbell Rows", sets: 4, reps: 6, rest: 120 },
                { name: "Barbell Hip Thrusts", sets: 4, reps: 8, rest: 120 },
                { name: "Barbell Lunges", sets: 4, reps: 8, rest: 120 },
                { name: "Barbell Bicep Curls", sets: 4, reps: 8, rest: 120 },
                { name: "Barbell Triceps Extensions", sets: 4, reps: 8, rest: 120 },
                { name: "Barbell Shrugs", sets: 4, reps: 10, rest: 120 },
            ],
            dumbbells: [
                { name: "Dumbbell Bench Press", sets: 4, reps: 8, rest: 120 },
                { name: "Dumbbell Rows", sets: 4, reps: 8, rest: 120 },
                { name: "Dumbbell Shoulder Press", sets: 4, reps: 8, rest: 120 },
                { name: "Dumbbell Romanian Deadlifts", sets: 4, reps: 10, rest: 120 },
                { name: "Dumbbell Lunges", sets: 4, reps: 10, rest: 120 },
                { name: "Dumbbell Bicep Curls", sets: 4, reps: 10, rest: 120 },
                { name: "Dumbbell Hammer Curls", sets: 4, reps: 10, rest: 120 },
                { name: "Dumbbell Triceps Extensions", sets: 4, reps: 10, rest: 120 },
                { name: "Dumbbell Lateral Raises", sets: 4, reps: 12, rest: 120 },
                { name: "Dumbbell Goblet Squats", sets: 4, reps: 10, rest: 120 },
            ],
            bodyweight: [
                { name: "Push ups Weighted", sets: 4, reps: 8, rest: 120 },
                { name: "Pistol Squats", sets: 3, reps: 6, rest: 120 },
                { name: "Pull ups Weighted", sets: 4, reps: 6, rest: 120 },
                { name: "Dips Weighted", sets: 4, reps: "As Many As Possible", rest: 120 },
                { name: "Handstand Push ups", sets: 3, reps: "As 5", rest: 120 },
                { name: "Muscle ups", sets: 3, reps: "5", rest: 180 },
                { name: "Planche Leans", sets: 3, reps: "15", rest: 120 },
                { name: "Front Lever Holds", sets: 3, reps: "15 sec hold", rest: 120 },
                { name: "One Arm Pull ups Assisted", sets: 3, reps: "As Many As Possible", rest: 180 },
                { name: "Advanced Plank Variations", sets: 3, reps: "60 sec hold", rest: 120 },
            ],
        },
    },
 strength: {
    beginner: {
        bodyweight: [
            { name: "Push ups", sets: 3, reps: 8, rest: 90 },
            { name: "Squats", sets: 3, reps: 10, rest: 90 },
            { name: "Plank", sets: 3, reps: "20 sec", rest: 90 },
            { name: "Incline Push ups", sets: 3, reps: 10, rest: 90 },
            { name: "Glute Bridges", sets: 3, reps: 12, rest: 90 },
            { name: "Walking Lunges", sets: 3, reps: 10, rest: 90 },
            { name: "Wall Sit", sets: 3, reps: "30 sec", rest: 90 },
            { name: "Crunches", sets: 3, reps: 12, rest: 90 },
            { name: "Superman", sets: 3, reps: 12, rest: 90 },
            { name: "Knee Push ups", sets: 3, reps: 12, rest: 90 },
        ],
        dumbbells: [
            { name: "Dumbbell Squats", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Rows", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Bench Press", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Shoulder Press", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Romanian Deadlifts", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Lunges", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Bicep Curls", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Triceps Extensions", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Goblet Squats", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Calf Raises", sets: 3, reps: 12, rest: 90 },
        ],
        barbells: [
            { name: "Barbell Squats", sets: 3, reps: 8, rest: 90 },
            { name: "Barbell Bench Press", sets: 3, reps: 8, rest: 90 },
            { name: "Barbell Rows", sets: 3, reps: 8, rest: 90 },
            { name: "Barbell Overhead Press", sets: 3, reps: 8, rest: 90 },
            { name: "Barbell Romanian Deadlifts", sets: 3, reps: 10, rest: 90 },
            { name: "Barbell Lunges", sets: 3, reps: 10, rest: 90 },
            { name: "Barbell Bicep Curls", sets: 3, reps: 10, rest: 90 },
            { name: "Barbell Triceps Extensions", sets: 3, reps: 10, rest: 90 },
            { name: "Barbell Shrugs", sets: 3, reps: 12, rest: 90 },
            { name: "Barbell Calf Raises", sets: 3, reps: 12, rest: 90 },
        ],
        machines: [
            { name: "Leg Press Machine", sets: 3, reps: 10, rest: 90 },
            { name: "Chest Press Machine", sets: 3, reps: 10, rest: 90 },
            { name: "Lat Pulldown Machine", sets: 3, reps: 10, rest: 90 },
            { name: "Seated Row Machine", sets: 3, reps: 10, rest: 90 },
            { name: "Shoulder Press Machine", sets: 3, reps: 10, rest: 90 },
            { name: "Leg Extension Machine", sets: 3, reps: 12, rest: 90 },
            { name: "Hamstring Curl Machine", sets: 3, reps: 12, rest: 90 },
            { name: "Calf Raise Machine", sets: 3, reps: 15, rest: 90 },
            { name: "Ab Crunch Machine", sets: 3, reps: 15, rest: 90 },
            { name: "Back Extension Machine", sets: 3, reps: 15, rest: 90 },
        ],
    },
    intermediate: {
        barbell: [
            { name: "Barbell Squats", sets: 5, reps: 5, rest: 180 },
            { name: "Barbell Deadlifts", sets: 1, reps: 5, rest: 180 },
            { name: "Barbell Bench Press", sets: 5, reps: 5, rest: 180 },
            { name: "Barbell Overhead Press", sets: 3, reps: 5, rest: 120 },
            { name: "Barbell Rows", sets: 3, reps: 5, rest: 120 },
            { name: "Barbell Power Cleans", sets: 3, reps: 3, rest: 120 },
            { name: "Barbell Front Squats", sets: 3, reps: 5, rest: 120 },
            { name: "Barbell Good Mornings", sets: 3, reps: 8, rest: 90 },
            { name: "Barbell Lunges", sets: 3, reps: 8, rest: 90 },
            { name: "Barbell Shrugs", sets: 3, reps: 8, rest: 90 },
        ],
        dumbbells: [
            { name: "Dumbbell Bench Press", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Rows", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Shoulder Press", sets: 3, reps: 8, rest: 90 },
            { name: "Dumbbell Romanian Deadlifts", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Lunges", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Bicep Curls", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Triceps Extensions", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Goblet Squats", sets: 3, reps: 10, rest: 90 },
            { name: "Dumbbell Pull overs", sets: 3, reps: 12, rest: 90 },
            { name: "Dumbbell Calf Raises", sets: 3, reps: 12, rest: 90 },
        ],
        bodyweight: [
            { name: "Pull ups", sets: 3, reps: "As Many As Possible", rest: 90 },
            { name: "Dips", sets: 3, reps: "As Many As Possible", rest: 90 },
            { name: "Push ups", sets: 3, reps: "As Many As Possible", rest: 90 },
            { name: "Plank", sets: 3, reps: "45 sec", rest: 90 },
            { name: "Chin ups", sets: 3, reps: "As Many As Possible", rest: 90 },
            { name: "Inverted Rows", sets: 3, reps: "As Many As Possible", rest: 90 },
            { name: "Lunges", sets: 3, reps: 12, rest: 60 },
            { name: "Glute Bridges", sets: 3, reps: 15, rest: 60 },
            { name: "Hanging Leg Raises", sets: 3, reps: 10, rest: 90 },
            { name: "Back Extensions", sets: 3, reps: 15, rest: 60 },
        ],
    },
    advanced: {
        gym: [
            { name: "Deadlifts", sets: 3, reps: 5, rest: 240 },
            { name: "Bench Press", sets: 3, reps: 5, rest: 240 },
            { name: "Squats", sets: 3, reps: 5, rest: 240 },
            { name: "Overhead Press", sets: 3, reps: 5, rest: 240 },
            { name: "Barbell Rows", sets: 3, reps: 5, rest: 240 },
            { name: "Weighted Pull ups", sets: 3, reps: 5, rest: 240 },
            { name: "Weighted Dips", sets: 3, reps: 5, rest: 240 },
            { name: "Front Squats", sets: 3, reps: 5, rest: 240 },
            { name: "Power Cleans", sets: 3, reps: 3, rest: 240 },
            { name: "Snatch", sets: 3, reps: 2, rest: 240 },
        ],
        barbell: [
            { name: "Barbell Squats", sets: 5, reps: 3, rest: 240 },
            { name: "Barbell Bench Press", sets: 5, reps: 3, rest: 240 },
            { name: "Barbell Deadlifts", sets: 3, reps: 3, rest: 300 },
            { name: "Barbell Overhead Press", sets: 5, reps: 3, rest: 240 },
            { name: "Barbell Rows", sets: 5, reps: 3, rest: 240 },
            { name: "Barbell Front Squats", sets: 3, reps: 3, rest: 240 },
            { name: "Barbell Power Cleans", sets: 3, reps: 2, rest: 240 },
            { name: "Barbell Snatch", sets: 3, reps: 1, rest: 240 },
            { name: "Barbell Good Mornings", sets: 3, reps: 5, rest: 180 },
            { name: "Barbell Lunges", sets: 3, reps: 5, rest: 180 },
        ],
        dumbbells: [
            { name: "Dumbbell Bench Press", sets: 3, reps: 5, rest: 180 },
            { name: "Dumbbell Rows", sets: 3, reps: 5, rest: 180 },
            { name: "Dumbbell Shoulder Press", sets: 3, reps: 5, rest: 180 },
            { name: "Dumbbell Romanian Deadlifts", sets: 3, reps: 8, rest: 180 },
            { name: "Dumbbell Lunges", sets: 3, reps: 8, rest: 180 },
            { name: "Dumbbell Bicep Curls", sets: 3, reps: 8, rest: 180 },
            { name: "Dumbbell Triceps Extensions", sets: 3, reps: 8, rest: 180 },
            { name: "Dumbbell Goblet Squats", sets: 3, reps: 8, rest: 180 },
            { name: "Dumbbell Pull overs", sets: 3, reps: 10, rest: 180 },
            { name: "Dumbbell Calf Raises", sets: 3, reps: 10, rest: 180 },
        ],
        bodyweight: [
            { name: "Weighted Pull ups", sets: 3, reps: 5, rest: 240 },
            { name: "Weighted Dips", sets: 3, reps: 5, rest: 240 },
            { name: "Pistol Squats", sets: 3, reps: 5, rest: 240 },
            { name: "Handstand Push ups", sets: 3, reps: "As Many As Possible", rest: 240 },
            { name: "Muscle ups", sets: 3, reps: "As Many As Possible", rest: 300 },
            { name: "Planche Leans", sets: 3, reps: "20 sec hold", rest: 240 },
            { name: "Front Lever Holds", sets: 3, reps: "20 sec hold", rest: 240 },
            { name: "One Arm Pull ups Assisted", sets: 3, reps: "As Many As Possible", rest: 300 },
            { name: "Advanced Plank Variations", sets: 3, reps: "90 sec hold", rest: 240 },
            { name: "Weighted Push ups", sets: 3, reps: 5, rest: 240 },
        ],
    },
},
endurance: {
    beginner: {
        bodyweight: [
            { name: "Jumping Jacks", sets: 3, reps: 30, rest: 30 },
            { name: "High Knees", sets: 3, reps: 30, rest: 30 },
            { name: "Walking", sets: 1, reps: "10 minutes", rest: 0 },
            { name: "Butt Kicks", sets: 3, reps: 30, rest: 30 },
            { name: "Mountain Climbers", sets: 3, reps: 20, rest: 40 },
            { name: "Step ups", sets: 3, reps: 10, rest: 30 },
        ],
        dumbbells: [
            { name: "Dumbbell Thrusters", sets: 3, reps: 10, rest: 45 },
            { name: "Dumbbell Swings", sets: 3, reps: 15, rest: 45 },
            { name: "Dumbbell Shadow Boxing", sets: 3, reps: 30, rest: 30 },
        ],
        gym: [
            { name: "Treadmill Run", sets: 1, reps: "10 minutes", rest: 0 },
            { name: "Elliptical", sets: 1, reps: "10 minutes", rest: 0 },
            { name: "Stationary Bike", sets: 1, reps: "10 minutes", rest: 0 },
        ],
    },
    intermediate: {
        bodyweight: [
            { name: "Burpees", sets: 3, reps: 30, rest: 30 },
            { name: "Mountain Climbers", sets: 3, reps: 30, rest: 30 },
            { name: "Running", sets: 1, reps: "20 minutes", rest: 0 },
            { name: "Jump Squats", sets: 3, reps: 15, rest: 45 },
            { name: "High Plank Jacks", sets: 3, reps: 20, rest: 30 },
            { name: "Skater Jumps", sets: 3, reps: 15, rest: 30 },
        ],
        dumbbells: [
            { name: "Dumbbell Snatches", sets: 3, reps: 10, rest: 45 },
            { name: "Dumbbell Push Press", sets: 3, reps: 12, rest: 45 },
            { name: "Dumbbell Renegade Rows", sets: 3, reps: 10, rest: 45 },
            { name: "Dumbbell Walking Lunges", sets: 3, reps: 10, rest: 30 },
            { name: "Dumbbell Burpees", sets: 3, reps: 8, rest: 45 },
        ],
        gym: [
            { name: "Rowing Machine", sets: 1, reps: "900 seconds", rest: 0 },
            { name: "Assault Bike", sets: 1, reps: "720 seconds", rest: 0 },
            { name: "Stair Climber", sets: 1, reps: "900 seconds", rest: 0 },
            { name: "Battle Ropes", sets: 3, reps: 30, rest: 45 },
            { name: "Sled Push", sets: 3, reps: 20, rest: 60 },
        ],
    },
    advanced: {
        bodyweight: [
            { name: "Long Distance Running", sets: 1, reps: "60 minutes", rest: 0 },
            { name: "HIIT Training", sets: 4, reps: 20, rest: 10 },
            { name: "Sprints", sets: 8, reps: 100, rest: 60 },
            { name: "Plyometric Circuit", sets: 3, reps: 10, rest: 60 },
            { name: "Hill Sprints", sets: 6, reps: 50, rest: 90 },
            { name: "Muscle Ups", sets: 5, reps: "AMRAP", rest: 120 },
        ],
        dumbbells: [
            { name: "Dumbbell Complex", sets: 4, reps: 8, rest: 60 },
            { name: "Dumbbell Snatch and Overhead Squat", sets: 4, reps: 6, rest: 90 },
            { name: "Dumbbell Farmer's Walk", sets: 3, reps: 50, rest: 90 },
            { name: "Dumbbell Thruster Ladder", sets: 1, reps: "Ladder", rest: 120 },
            { name: "Dumbbell Turkish Get ups", sets: 3, reps: 5, rest: 90 },
        ],
        gym: [
            { name: "Interval Rowing", sets: 5, reps: 500, rest: 120 },
            { name: "High Intensity Assault Bike Intervals", sets: 6, reps: 30, rest: 60 },
            { name: "Loaded Sled Pushes", sets: 5, reps: 50, rest: 120 },
            { name: "Ski Erg Intervals", sets: 4, reps: 40, rest: 90 },
            { name: "VersaClimber Intervals", sets: 4, reps: 30, rest: 90 },
        ],
    },
},
fatloss: {
    beginner: {
        bodyweight: [
            { name: "Jumping Jacks", sets: 3, reps: 30, rest: 30 },
            { name: "Squats", sets: 3, reps: 15, rest: 45 },
            { name: "Push ups", sets: 3, reps: 12, rest: 45 },
            { name: "High Knees", sets: 3, reps: 30, rest: 30 },
            { name: "Walking Lunges", sets: 3, reps: 10, rest: 30 },
            { name: "Plank", sets: 3, reps: 30, rest: 30 },
        ],
        dumbbells: [
            { name: "Dumbbell Squat to Press", sets: 3, reps: 12, rest: 45 },
            { name: "Dumbbell Rows", sets: 3, reps: 12, rest: 45 },
            { name: "Dumbbell Romanian Deadlifts", sets: 3, reps: 15, rest: 45 },
            { name: "Dumbbell Thrusters", sets: 3, reps: 10, rest: 45 },
            { name: "Dumbbell Step ups", sets: 3, reps: 10, rest: 30 },
        ],
        gym: [
            { name: "Treadmill Walk or Jog", sets: 1, reps: "1200 seconds", rest: 0 },
            { name: "Elliptical Trainer", sets: 1, reps: "1200 seconds", rest: 0 },
            { name: "Stationary Bike", sets: 1, reps: "1200 seconds", rest: 0 },
            { name: "Rowing Machine", sets: 1, reps: "900 seconds", rest: 0 },
            { name: "Leg Press Machine", sets: 3, reps: 15, rest: 45 },
        ],
    },
    intermediate: {
        bodyweight: [
            { name: "Burpees", sets: 3, reps: 30, rest: 30 },
            { name: "Mountain Climbers", sets: 3, reps: 30, rest: 30 },
            { name: "Lunges", sets: 3, reps: 15, rest: 45 },
            { name: "Jump Squats", sets: 3, reps: 15, rest: 45 },
            { name: "High Plank Jacks", sets: 3, reps: 20, rest: 30 },
            { name: "Skater Jumps", sets: 3, reps: 15, rest: 30 },
        ],
        dumbbells: [
            { name: "Dumbbell Snatches", sets: 3, reps: 10, rest: 45 },
            { name: "Dumbbell Push Press", sets: 3, reps: 12, rest: 45 },
            { name: "Dumbbell Renegade Rows", sets: 3, reps: 10, rest: 45 },
            { name: "Dumbbell Walking Lunges", sets: 3, reps: 10, rest: 30 },
            { name: "Dumbbell Burpees", sets: 3, reps: 8, rest: 45 },
        ],
        gym: [
            { name: "Rowing Machine Intervals", sets: 4, reps: 500, rest: 60 },
            { name: "Assault Bike Intervals", sets: 4, reps: 30, rest: 60 },
            { name: "Stair Climber Intervals", sets: 4, reps: 20, rest: 60 },
            { name: "Battle Ropes", sets: 3, reps: 30, rest: 45 },
            { name: "Sled Push", sets: 3, reps: 20, rest: 60 },
        ],
    },
    advanced: {
        bodyweight: [
            { name: "High Intensity Burpee Variations", sets: 4, reps: 20, rest: 30 },
            { name: "Advanced Plyometric Circuit", sets: 4, reps: 15, rest: 45 },
            { name: "Complex Bodyweight Movements", sets: 4, reps: 10, rest: 60 },
            { name: "Sprint Intervals", sets: 6, reps: 100, rest: 60 },
            { name: "Hill Sprints with Burpees", sets: 5, reps: 50, rest: 90 },
        ],
        dumbbells: [
            { name: "Dumbbell Complex Circuit", sets: 4, reps: 10, rest: 60 },
            { name: "Dumbbell Snatch and Overhead Squat Complex", sets: 4, reps: 8, rest: 60 },
            { name: "Dumbbell Thruster Ladder", sets: 1, reps: "Ladder", rest: 120 },
            { name: "Dumbbell Renegade Row Complex", sets: 4, reps: 10, rest: 60 },
            { name: "Dumbbell Turkish Get ups with Press", sets: 3, reps: 5, rest: 90 },
        ],
        gym: [
            { name: "HIIT on Treadmill", sets: 5, reps: 30, rest: 30 },
            { name: "Rowing Machine Intervals", sets: 5, reps: 500, rest: 60 },
            { name: "Kettlebell Swings", sets: 4, reps: 20, rest: 45 },
            { name: "Assault Bike Intervals", sets: 6, reps: 30, rest: 60 },
            { name: "Ski Erg Intervals", sets: 5, reps: 40, rest: 60 },
        ],
    },
},
calisthenics: {
    beginner: [
        { name: "Squats", sets: 3, reps: 12, rest: 60 },
        { name: "Lunges", sets: 3, reps: 12, rest: 60 },
        { name: "Plank", sets: 3, reps: "30 sec", rest: 60 },
        { name: "Incline Push ups", sets: 3, reps: 12, rest: 60 },
        { name: "Glute Bridges", sets: 3, reps: 15, rest: 60 },
        { name: "Crunches", sets: 3, reps: 15, rest: 60 },
        { name: "Supermans", sets: 3, reps: 15, rest: 60 },
        { name: "Wall Sit", sets: 3, reps: "30 sec", rest: 60 },
        { name: "Knee Push ups", sets: 3, reps: 15, rest: 60 },
        { name: "Russian Twists", sets: 3, reps: 12, rest: 60 },
        { name: "Bird Dog", sets: 3, reps: 10, rest: 60 },
        { name: "Calf Raises", sets: 3, reps: 15, rest: 45 },
        { name: "Hip Thrusts", sets: 3, reps: 15, rest: 60 },
        { name: "Reverse Crunches", sets: 3, reps: 12, rest: 60 },
        { name: "Bodyweight Rows Inverted Rows", sets: 3, reps: 8, rest: 60 },
        { name: "Side Plank", sets: 3, reps: "20 sec", rest: 60 },
        { name: "Donkey Kicks", sets: 3, reps: 15, rest: 45 },
        { name: "Lateral Lunges", sets: 3, reps: 10, rest: 60 },
        { name: "Bear Crawls", sets: 3, reps: 20, rest: 60 },
        { name: "Assisted Dips", sets: 3, reps: 8, rest: 60 },
        { name: "Band Assisted Pull ups", sets: 3, reps: 8, rest: 60 },
        { name: "Band Assisted Dips", sets: 3, reps: 8, rest: 60 },
        { name: "Negative Pull ups", sets: 3, reps: 5, rest: 60 },
        { name: "Negative Dips", sets: 3, reps: 5, rest: 60 },
        { name: "Incline Rows Assisted", sets: 3, reps: 10, rest: 60 },
        { name: "Elevated Pike Push ups Assisted", sets: 3, reps: 8, rest: 60 },
        { name: "Wall Assisted Handstand Holds", sets: 3, reps: "15 sec", rest: 60 },
        { name: "Band Assisted Squats", sets: 3, reps: 12, rest: 60 },
    ],
    intermediate: [
        { name: "Dips", sets: 3, reps: 10, rest: 90 },
        { name: "Pistol Squats", sets: 3, reps: 6, rest: 90 },
        { name: "Handstand Practice", sets: 3, reps: "30 sec", rest: 90 },
        { name: "Archer Push ups", sets: 3, reps: 6, rest: 90 },
        { name: "Australian Pull ups", sets: 3, reps: 12, rest: 60 },
        { name: "L-Sit Holds", sets: 3, reps: "20 sec", rest: 90 },
        { name: "Elevated Pike Push ups", sets: 3, reps: 8, rest: 90 },
        { name: "Jump Squats", sets: 3, reps: 10, rest: 60 },
        { name: "Close Grip Push ups", sets: 3, reps: 12, rest: 60 },
        { name: "Weighted Dips Light", sets: 3, reps: 6, rest: 90 },
    ],
    advanced: [
        { name: "Front Lever", sets: 3, reps: "15 sec", rest: 120 },
        { name: "One Arm Pull ups", sets: 3, reps: 3, rest: 120 },
        { name: "Planche", sets: 3, reps: "10 sec", rest: 120 },
        { name: "One Arm Handstand Push ups", sets: 3, reps: 3, rest: 120 },
        { name: "Victorian Cross", sets: 3, reps: "5 sec", rest: 180 },
        { name: "Human Flag", sets: 3, reps: "5 sec", rest: 180 },
        { name: "90 Degree Push ups", sets: 3, reps: 5, rest: 120 },
        { name: "Back Lever", sets: 3, reps: "10 sec", rest: 120 },
        { name: "Weighted Pull ups", sets: 4, reps: 5, rest: 120 },
        { name: "Weighted Dips", sets: 4, reps: 8, rest: 120 },
        { name: "Weighted Pistol Squats", sets: 3, reps: 5, rest: 120 },
        { name: "Weighted Archer Pull ups", sets: 3, reps: 4, rest: 120 },
        { name: "Weighted Australian Pull ups", sets: 3, reps: 10, rest: 90 },
        { name: "Weighted L Sit Holds", sets: 3, reps: "15 sec", rest: 120 },
        { name: "Weighted Pike Push ups", sets: 3, reps: 6, rest: 120 },
        { name: "Weighted Close Grip Push ups", sets: 3, reps: 10, rest: 90 },
        { name: "Weighted Back Lever Pulls", sets: 3, reps: 5, rest: 120 },
    ],
},
powerlifting_5x5: {
    beginner: [
        { name: "Barbell Squats", sets: 5, reps: 5, rest: 180 },
        { name: "Barbell Bench Press", sets: 5, reps: 5, rest: 180 },
        { name: "Barbell Rows", sets: 5, reps: 5, rest: 180 },
        { name: "Overhead Press", sets: 3, reps: 8, rest: 120 },
        { name: "Romanian Deadlifts", sets: 3, reps: 8, rest: 120 },
        { name: "Front Squats", sets: 5, reps: 5, rest: 180 },
        { name: "Incline Barbell Bench Press", sets: 5, reps: 5, rest: 180 },
        { name: "Pendlay Rows", sets: 5, reps: 5, rest: 180 },
        { name: "Arnold Press", sets: 3, reps: 8, rest: 120 },
        { name: "Good Mornings", sets: 3, reps: 8, rest: 120 },
        { name: "Paused Squats", sets: 5, reps: 5, rest: 180 },
        { name: "Decline Barbell Bench Press", sets: 5, reps: 5, rest: 180 },
        { name: "Chest Supported Rows", sets: 5, reps: 5, rest: 180 },
        { name: "Lateral Raises", sets: 3, reps: 10, rest: 120 },
        { name: "Glute Bridges", sets: 3, reps: 12, rest: 90 },
    ],
    intermediate: [
        { name: "Barbell Squats", sets: 5, reps: 5, rest: 240 },
        { name: "Barbell Bench Press", sets: 5, reps: 5, rest: 240 },
        { name: "Barbell Rows", sets: 5, reps: 5, rest: 240 },
        { name: "Overhead Press", sets: 5, reps: 5, rest: 240 },
        { name: "Deadlifts", sets: 1, reps: 5, rest: 240 },
        { name: "Pull ups", sets: 3, reps: "AMRAP", rest: 180 },
        { name: "Front Squats", sets: 5, reps: 5, rest: 240 },
        { name: "Incline Barbell Bench Press", sets: 5, reps: 5, rest: 240 },
        { name: "Pendlay Rows", sets: 5, reps: 5, rest: 240 },
        { name: "Push Press", sets: 5, reps: 5, rest: 240 },
        { name: "Sumo Deadlifts", sets: 1, reps: 5, rest: 240 },
        { name: "Dips", sets: 3, reps: "AMRAP", rest: 180 },
        { name: "Paused Squats", sets: 5, reps: 5, rest: 240 },
        { name: "Decline Barbell Bench Press", sets: 5, reps: 5, rest: 240 },
        { name: "Chest Supported Rows", sets: 5, reps: 5, rest: 240 },
        { name: "Behind the Neck Press", sets: 5, reps: 5, rest: 240 },
        { name: "Snatch Grip Deadlifts", sets: 1, reps: 5, rest: 240 },
        { name: "Weighted Pull ups", sets: 3, reps: 5, rest: 180 },
    ],
    advanced: [
        { name: "Barbell Squats", sets: 5, reps: 5, rest: 240 },
        { name: "Barbell Bench Press", sets: 5, reps: 5, rest: 240 },
        { name: "Barbell Rows", sets: 5, reps: 5, rest: 240 },
        { name: "Overhead Press", sets: 5, reps: 5, rest: 240 },
        { name: "Deadlifts", sets: 1, reps: 5, rest: 240 },
        { name: "Weighted Pull ups", sets: 3, reps: 5, rest: 180 },
        { name: "Weighted Dips", sets: 3, reps: 5, rest: 180 },
        { name: "Front Squats", sets: 5, reps: 5, rest: 240 },
        { name: "Incline Barbell Bench Press", sets: 5, reps: 5, rest: 240 },
        { name: "Pendlay Rows", sets: 5, reps: 5, rest: 240 },
        { name: "Push Press", sets: 5, reps: 5, rest: 240 },
        { name: "Sumo Deadlifts", sets: 1, reps: 5, rest: 240 },
        { name: "Romanian Deadlifts", sets: 3, reps: 8, rest: 120 },
        { name: "Muscle Ups", sets: 3, reps: "AMRAP", rest: 180 },
        { name: "Paused Squats", sets: 5, reps: 5, rest: 240 },
        { name: "Decline Barbell Bench Press", sets: 5, reps: 5, rest: 240 },
        { name: "Chest Supported Rows", sets: 5, reps: 5, rest: 240 },
        { name: "Behind the Neck Press", sets: 5, reps: 5, rest: 240 },
        { name: "Snatch Grip Deadlifts", sets: 1, reps: 5, rest: 240 },
        { name: "Good Mornings", sets: 3, reps: 8, rest: 120 },
        { name: "Weighted Pull ups", sets: 3, reps: 5, rest: 180 },
    ],
},
hiit: {
    beginner: [
        { name: "Jumping Jacks", sets: 5, reps: "30 sec", rest: 30 },
        { name: "High Knees", sets: 5, reps: "30 sec", rest: 30 },
        { name: "Butt Kicks", sets: 5, reps: "30 sec", rest: 30 },
        { name: "Mountain Climbers", sets: 5, reps: "20 sec", rest: 40 },
        { name: "Squat Jumps", sets: 5, reps: "15 sec", rest: 45 },
        { name: "Plank Jacks", sets: 5, reps: "20 sec", rest: 40 },
        { name: "Skater Jumps", sets: 5, reps: "20 sec", rest: 40 },
        { name: "Burpees", sets: 5, reps: "10 sec", rest: 50 },
    ],
    intermediate: [
        { name: "Burpees", sets: 5, reps: "30 sec", rest: 30 },
        { name: "Mountain Climbers", sets: 5, reps: "30 sec", rest: 30 },
        { name: "Jump Squats", sets: 5, reps: "20 sec", rest: 40 },
        { name: "High Plank Jacks", sets: 5, reps: "25 sec", rest: 35 },
        { name: "Skater Jumps", sets: 5, reps: "25 sec", rest: 35 },
        { name: "Push ups", sets: 5, reps: "20 sec", rest: 40 },
        { name: "Dumbbell Thrusters", sets: 5, reps: "20 sec", rest: 40 },
        { name: "Kettlebell Swings", sets: 5, reps: "20 sec", rest: 40 },
        { name: "Box Jumps", sets: 5, reps: "15 sec", rest: 45 },
    ],
    advanced: [
        { name: "Sprints", sets: 5, reps: "30 sec", rest: 30 },
        { name: "Kettlebell Swings", sets: 5, reps: "30 sec", rest: 30 },
        { name: "Burpee Box Jumps", sets: 5, reps: "20 sec", rest: 40 },
        { name: "Thruster Burpees", sets: 5, reps: "20 sec", rest: 40 },
        { name: "Double Unders", sets: 5, reps: "20 sec", rest: 40 },
        { name: "Muscle ups", sets: 5, reps: "AMRAP", rest: 60 },
        { name: "Pistol Squats Alternating", sets: 5, reps: "20 sec", rest: 40 },
        { name: "Weighted Pull ups", sets: 5, reps: "AMRAP", rest: 60 },
        { name: "Handstand Push ups", sets: 5, reps: "15 sec", rest: 45 },
    ],
},
circuit: {
    beginner: [
        { name: "Squats", sets: 3, reps: 10, rest: 15 },
        { name: "Push ups", sets: 3, reps: 10, rest: 15 },
        { name: "Lunges each leg", sets: 3, reps: 10, rest: 15 },
        { name: "Plank", sets: 3, reps: "30 sec", rest: 15 },
        { name: "Jumping Jacks", sets: 3, reps: 30, rest: 15 },
        { name: "High Knees", sets: 3, reps: 30, rest: 15 },
        { name: "Butt Kicks", sets: 3, reps: 30, rest: 15 },
        { name: "Crunches", sets: 3, reps: 15, rest: 15 },
        { name: "Glute Bridges", sets: 3, reps: 15, rest: 15 },
        { name: "Mountain Climbers", sets: 3, reps: 20, rest: 15 },
        { name: "Wall Sit", sets: 3, reps: "30 sec", rest: 15 },
        { name: "Bodyweight Rows using table", sets: 3, reps: 10, rest: 15 },
    ],
    intermediate: [
        { name: "Jump Squats", sets: 3, reps: 12, rest: 20 },
        { name: "Diamond Push ups", sets: 3, reps: 10, rest: 20 },
        { name: "Walking Lunges each leg", sets: 3, reps: 12, rest: 20 },
        { name: "Plank with Shoulder Taps", sets: 3, reps: 10, rest: 20 },
        { name: "Burpees", sets: 3, reps: 10, rest: 20 },
        { name: "Dumbbell Rows", sets: 3, reps: 12, rest: 20 },
        { name: "Dumbbell Thrusters", sets: 3, reps: 10, rest: 20 },
        { name: "Russian Twists", sets: 3, reps: 20, rest: 20 },
        { name: "Box Jumps", sets: 3, reps: 8, rest: 20 },
        { name: "Inverted Rows", sets: 3, reps: 10, rest: 20 },
        { name: "Plank with Leg Raises", sets: 3, reps: 10, rest: 20 },
        { name: "Kettlebell Swings", sets: 3, reps: 12, rest: 20 },
    ],
    advanced: [
        { name: "Burpee Box Jumps", sets: 3, reps: 8, rest: 25 },
        { name: "Handstand Push ups", sets: 3, reps: 6, rest: 25 },
        { name: "Pistol Squats Alternating", sets: 3, reps: 8, rest: 25 },
        { name: "Muscle ups", sets: 3, reps: "AMRAP", rest: 25 },
        { name: "Weighted Pull ups", sets: 3, reps: 6, rest: 25 },
        { name: "Thruster Burpees", sets: 3, reps: 8, rest: 25 },
        { name: "Double Unders", sets: 3, reps: 20, rest: 25 },
        { name: "Toes to Bar", sets: 3, reps: 8, rest: 25 },
        { name: "Turkish Get ups", sets: 3, reps: 5, rest: 25 },
        { name: "Snatches Dumbbell or Kettlebell", sets: 3, reps: 8, rest: 25 },
        { name: "Front Squats Barbell", sets: 3, reps: 8, rest: 25 },
        { name: "Box Jump Overs", sets: 3, reps: 8, rest: 25 },
    ],
  },
};

/* ............................................... Function: Handle Modality Change ...................................................... */

document.getElementById("modality").addEventListener("change", function () {
    const goalSelect = document.getElementById("goal");
    if (["powerlifting_5x5", "hiit", "circuit", "calisthenics"].includes(this.value)) {
        goalSelect.value = "strength";
        goalSelect.disabled = true;
        goalSelect.style.color = "#aaa";
        goalSelect.style.backgroundColor = "#eee";
    } else {
        goalSelect.disabled = false;
        goalSelect.style.color = "";
        goalSelect.style.backgroundColor = "";
    }
});

// Disable the copy button initially
document.getElementById("copy-workout").disabled = true;

/* ............................................... Function: Generate Workout ...................................................... */
let workoutTextForCopy = "";

document.getElementById("generate-workout").addEventListener("click", function () {
    const goal = document.getElementById("goal").value;
    const experience = document.getElementById("experience").value;
    const modality = document.getElementById("modality").value;
    const resultDiv = document.getElementById("workout-result");
    resultDiv.innerHTML = "";

    let selectedExercises = [];

    if (exercises[modality]) {
        selectedExercises = exercises[modality][experience] ? 
                            normalizeExercises(exercises[modality][experience]) : 
                            normalizeExercises(exercises[modality].all || exercises[modality]);
    } else if (exercises[goal] && exercises[goal][experience]) {
        for (const key in exercises[goal][experience]) {
            if (Array.isArray(exercises[goal][experience][key])) {
                selectedExercises = selectedExercises.concat(normalizeExercises(exercises[goal][experience][key]));
            }
        }
    }

    if (!selectedExercises.length) {
        resultDiv.textContent = "No exercises found for your selected criteria.";
        return;
    }

    const workout = [];
    let availableExercises = [...selectedExercises];

    for (let i = 0; i < 5 && availableExercises.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableExercises.length);
        workout.push(availableExercises.splice(randomIndex, 1)[0]);
    }

    let totalWorkoutTime = 0;
    let repTime = 2; // Average rep time in seconds
    workoutTextForCopy = "";

    let workoutHTML = `<br><center><h3><u>YOUR WORKOUT</u></h3></center><ul>`;
    workout.forEach(ex => {
        let exerciseText = `<li><b>${ex.name}</b>`;
        workoutTextForCopy += `${ex.name}`;

        if (ex.sets && ex.reps) {
            exerciseText += ` - Reps: ${ex.sets}x${ex.reps}`;
            workoutTextForCopy += ` - Reps: ${ex.sets}x${ex.reps}`;
        }

        if (ex.rest) {
            exerciseText += ` - Rest: ${ex.rest} seconds`;
            workoutTextForCopy += ` - Rest: ${ex.rest} seconds`;

            let restPerSet = typeof ex.rest === "number" ? ex.rest : parseInt(ex.rest.match(/\d+/)[0]) || 0;
            totalWorkoutTime += ex.sets * restPerSet;
        }

        if (typeof ex.reps === 'number') {
            totalWorkoutTime += ex.sets * ex.reps * repTime;
        } else if (typeof ex.reps === 'string' && ex.reps.includes('sec')) {
            let seconds = parseInt(ex.reps.match(/\d+/)[0]) || 0;
            totalWorkoutTime += ex.sets * seconds;
        }

        workoutHTML += `${exerciseText}</li>`;
        workoutTextForCopy += "\n";
    });

    const minutes = Math.round(totalWorkoutTime / 60);
    workoutHTML += `<p><i>Estimated Workout Time: ${minutes} minutes</i></p>`;
    workoutTextForCopy += `Estimated Workout Time: ${minutes} minutes`;

    resultDiv.innerHTML = DOMPurify.sanitize(workoutHTML);
    document.getElementById("copy-workout").disabled = false;
});

/* ............................................... Function: Generate PDF ...................................................... */
document.getElementById('download-pdf').addEventListener('click', function () {
    let workoutText = document.getElementById('paste-text').value;
    workoutText = DOMPurify.sanitize(workoutText);

    if (!workoutText.trim()) {
        alert("Please paste workout text before downloading.");
        return;
    }

    const validationResult = validateWorkoutText(workoutText);
    if (!validationResult.isValid) {
        alert("Workout text validation errors:\n" + validationResult.errors.join('\n'));
        return;
    }

    const lines = workoutText.split('\n');
    let tableData = [];
    let headers = ["Exercise", "Reps", "Rest", "Set 1", "Set 2", "Set 3", "Set 4", "Set 5"];
    let totalWorkoutTime = 0;

    lines.forEach(line => {
        if (!line.trim() || line.includes("Estimated Workout Time")) return;

        const exerciseMatch = line.match(/^(.+?) - Reps:/);
        const repsMatch = line.match(/Reps: (.+?) - Rest:/);
        const restMatch = line.match(/Rest: (.+?) (seconds?|minutes?)\.?/);

        if (exerciseMatch) {
            let sets = 1;
            let reps = repsMatch ? repsMatch[1].trim() : "";
            let restValue = restMatch ? parseInt(restMatch[1]) : 0;

            if (reps.includes('x')) {
                const parts = reps.split('x');
                if (parts.length === 2 && !isNaN(parseInt(parts[0]))) {
                    sets = parseInt(parts[0]);
                    reps = parts[1].trim();
                }
            }

            let exerciseTimePerSet = 120;
            let restTimePerSet = restValue ? (restMatch[2] === "minutes" ? restValue * 60 : restValue) : 0;

            totalWorkoutTime += sets * exerciseTimePerSet;
            totalWorkoutTime += (sets - 1) * restTimePerSet;

            tableData.push([exerciseMatch[1], reps, restMatch ? restMatch[1] + " " + restMatch[2] : "", "", "", "", "", ""]);
        }
    });

    const minutes = Math.round(totalWorkoutTime / 60);
    const timeText = `Estimated Workout Time: ${minutes} minutes`;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.autoTable({
        head: [headers],
        body: tableData,
        startY: 10,
        styles: { fontSize: 10, cellPadding: 5 },
        headStyles: { fillColor: [169, 169, 169], textColor: [0, 0, 0] },
        tableLineWidth: 1,
        tableBorderColor: [169, 169, 169],
    });

    doc.setFontSize(11);
    doc.setTextColor(105, 105, 105);
    doc.text(timeText, 10, doc.autoTable.previous.finalY + 10);

    doc.save("workout.pdf");
});


/* .................................................. Populate Exercise Table .................................................. */
document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById("exercise-table-body");
    if (!tableBody) return;

    tableBody.innerHTML = "";
    let allExercises = new Set();

    Object.values(exercises).forEach(category => {
        Object.values(category).forEach(level => {
            Object.values(level).flat().forEach(exercise => {
                allExercises.add(JSON.stringify(exercise));
            });
        });
    });

    [...allExercises].map(JSON.parse).sort((a, b) => a.name.localeCompare(b.name)).forEach(exercise => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><button class="copy-exercise" data-exercise="${exercise.name} - Reps: ${exercise.sets}x${exercise.reps} - Rest: ${exercise.rest} seconds">${exercise.name}</button></td>
            <td>${exercise.sets}</td>
            <td>${exercise.reps}</td>
            <td>${exercise.rest}</td>
        `;
        tableBody.appendChild(row);
    });

    document.querySelectorAll(".copy-exercise").forEach(button => {
        button.addEventListener("click", function () {
            navigator.clipboard.writeText(this.dataset.exercise).then(() => {
                this.textContent = "Copied!";
                setTimeout(() => this.textContent = this.dataset.exercise.split(" - ")[0], 2000);
            }).catch(err => console.error("Copy failed", err));
        });
    });
});
