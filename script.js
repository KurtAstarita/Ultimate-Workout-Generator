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
            { name: "Rowing Machine", sets: 1, reps: "15 minutes", rest: 0 },
            { name: "Assault Bike", sets: 1, reps: "12 minutes", rest: 0 },
            { name: "Stair Climber", sets: 1, reps: "15 minutes", rest: 0 },
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
            { name: "Treadmill Walk or Jog", sets: 1, reps: "20 minutes", rest: 0 },
            { name: "Elliptical Trainer", sets: 1, reps: "20 minutes", rest: 0 },
            { name: "Stationary Bike", sets: 1, reps: "20 minutes", rest: 0 },
            { name: "Rowing Machine", sets: 1, reps: "15 minutes", rest: 0 },
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

/* ............................................... Function: Generate Workout ...................................................... */
// Declare workoutTextForCopy outside of the function to make it globally accessible
let workoutTextForCopy = "";

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
    workoutTextForCopy = ""; // Reset workoutTextForCopy here

    workout.forEach(ex => {
        workoutHTML += `<br><br><li><b>${ex.name}</b>`;
        workoutTextForCopy += `${ex.name}`;

        if (ex.sets && ex.reps) {
            workoutHTML += ` - Reps: ${ex.sets}x${ex.reps}`;
            workoutTextForCopy += ` - Reps: ${ex.sets}x${ex.reps}`;
        }
        if (ex.rest) {
            workoutHTML += ` - Rest: ${ex.rest} seconds`;
            workoutTextForCopy += ` - Rest: ${ex.rest} seconds`;

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
        if(ex.rest){
            workoutTextForCopy += "."; // Add period here, after rest data.
        }

        // Add a newline character after each exercise
        workoutTextForCopy += "\n";
    });

    const minutes = Math.round(totalWorkoutTime / 60);
    workoutHTML += `<p><i>Estimated Workout Time: ${minutes} minutes</i></p>`;
    workoutTextForCopy += `Estimated Workout Time: ${minutes} minutes`;

    resultDiv.innerHTML = DOMPurify.sanitize(workoutHTML);

    // Enable the copy button after the workout is generated
    document.getElementById("copy-workout").disabled = false;
});

// Add event listener for copy to clipboard button
document.getElementById("copy-workout").addEventListener("click", function () {
    const workoutContent = workoutTextForCopy;
    navigator.clipboard.writeText(workoutContent).then(() => {
        alert("Workout copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});

/* ............................................... Function: Validate Workout ...................................................... */

function validateWorkoutText(workoutText) {
    const lines = workoutText.split('\n');
    const errors = [];
    let isValid = true;

    lines.forEach((line, index) => {
        if (line.trim() && !line.includes("Estimated Workout Time")) {
            const exerciseMatch = line.match(/^(.+?) - Reps:/);
            const repsMatch = line.match(/Reps: (.+?) - Rest:/);
            const restMatch = line.match(/Rest: (.+?) seconds?\./);

            if (!exerciseMatch) {
                errors.push(`Line ${index + 1}: Exercise name not found.`);
                isValid = false;
            }
            if (!repsMatch) {
                errors.push(`Line ${index + 1}: Reps information not found.`);
                isValid = false;
            }
            if (!restMatch) {
                errors.push(`Line ${index + 1}: Rest information not found.`);
                isValid = false;
            }
        }
    });

    return {
        isValid: isValid,
        errors: errors
    };
}

/* ............................................... Function: Download PDF ...................................................... */
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

        const lines = workoutText.split('\n');
        let tableData = [];
        let headers = ["Exercise", "Reps", "Rest", "Set 1", "Set 2", "Set 3", "Set 4", "Set 5", "Set 6", "Set 7", "Set 8"];
        let totalWorkoutTime = 0;
        let repTime = 2; // Average time per rep in seconds

        lines.forEach(line => {
            if (line.trim() && !line.includes("Estimated Workout Time")) {
                const exerciseMatch = line.match(/^(.+?) - Reps:/);
                const repsMatch = line.match(/Reps: (.+?) - Rest:/);
                const restMatch = line.match(/Rest: (.+?) seconds?\./);

                if (exerciseMatch) {
                    const exerciseName = exerciseMatch[1].replace(/<b>|<\/b>/g, '').trim();
                    const reps = repsMatch ? repsMatch[1].trim() : "";
                    const rest = restMatch ? restMatch[1].trim() : "";

                    let sets = 0;
                    if (repsMatch) {
                        const setsAndReps = repsMatch[1].split('x');
                        if (setsAndReps.length === 2 && !isNaN(parseInt(setsAndReps[0]))) {
                            sets = parseInt(setsAndReps[0]);
                        }
                    }

                    tableData.push([exerciseName, reps, rest, "", "", "", "", "", "", "", ""]);

                    // Calculate time
                    if (restMatch && repsMatch) {
                        if (!isNaN(parseInt(repsMatch[1].split('x')[1]))) {
                            totalWorkoutTime += sets * parseInt(repsMatch[1].split('x')[1]) * repTime;
                        }

                        if (!isNaN(parseInt(restMatch[1]))) {
                            totalWorkoutTime += sets * parseInt(restMatch[1]);
                        }
                    }

                } else {
                    if (line.trim() !== "") {
                        console.warn("Unexpected line format:", line);
                    }
                }
            }
        });

        // Calculate time
        const minutes = Math.round(totalWorkoutTime / 60);
        const timeText = `Estimated Workout Time: ${minutes} minutes`;

        doc.autoTable({
            head: [headers],
            body: tableData,
            startY: 10,
            styles: {
                fontSize: 8,
                cellPadding: 2,
                borderColor: [169, 169, 169],
                borderWidth: 1,
            },
            headStyles: {
                fontSize: 8,
                fillColor: [200, 200, 200],
                borderColor: [169, 169, 169],
                borderWidth: 1,
            },
            columnStyles: {
                3: { cellWidth: 'auto' },
                4: { cellWidth: 'auto' },
                5: { cellWidth: 'auto' },
                6: { cellWidth: 'auto' },
                7: { cellWidth: 'auto' },
            },
            tableLineWidth: 1,
            tableBorderColor: [169, 169, 169],
        });

      // Add estimated time below the table with styling
        const tableEndY = doc.autoTable.previous.finalY;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11); // Set font size to 11
        doc.setTextColor(105, 105, 105); // Set color to medium charcoal (dark gray)
        doc.text(timeText, 10, tableEndY + 10);
        doc.setTextColor(0,0,0); // reset color to black
        doc.setFont('helvetica', 'normal');

        doc.save("workout.pdf");

    } catch (mainError) {
        console.error("Error generating PDF:", mainError);
        alert("An error occurred while generating the PDF.");
    }
});

/* ............................................... Function: To Populate table ...................................................... */

function populateExerciseTable() {
    console.log("Populating exercise table..."); // Debugging log

    const tableBody = document.getElementById("exercise-table-body");
    if (!tableBody) {
        console.error("Table body element not found.");
        return;
    }
    tableBody.innerHTML = "";

    let allExercises = [];
    let seenExercises = new Set();

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
                } else if (typeof exerciseList === 'object' && exerciseList !== null) { // Handle objects
                    const normalizedName = exerciseList.name.trim().toLowerCase();
                    if (!seenExercises.has(normalizedName)) {
                        allExercises.push(exerciseList);
                        seenExercises.add(normalizedName);
                    }
                } else {
                    console.warn(`Expected an array or object, but found: ${typeof exerciseList} for ${category} > ${level} > ${type}`);
                }
            }
        }
    }

    allExercises.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    allExercises.forEach(exercise => {
        const row = document.createElement("tr");
        const button = document.createElement("button");
        button.className = "copy-exercise";
        let copyText = `${exercise.name} - Reps: ${exercise.sets}x${exercise.reps}`;
        if (exercise.rest) {
            copyText += ` - Rest: ${exercise.rest} seconds.`;
        }
        button.dataset.exercise = copyText;
        button.textContent = exercise.name;

        const cell1 = document.createElement("td");
        cell1.appendChild(button);

        const cell4 = document.createElement("td");
        cell4.textContent = exercise.sets;

        const cell5 = document.createElement("td");
        cell5.textContent = exercise.reps;

        const cell6 = document.createElement("td");
        cell6.textContent = exercise.rest;

        row.appendChild(cell1);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);

        tableBody.appendChild(row);
    });

    // Attach event listeners after the elements are created
    document.querySelectorAll(".copy-exercise").forEach(button => {
        button.addEventListener("click", function () {
            const textToCopy = this.dataset.exercise;
            navigator.clipboard.writeText(textToCopy).then(() => {
                this.textContent = "Copied!";
                setTimeout(() => this.textContent = this.dataset.exercise.split(" - ")[0], 2000);
            }).catch(err => {
                console.error("Copy failed", err);
            });
        });
    });
}

// Call populateExerciseTable() after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Loaded"); // Debugging
    populateExerciseTable();
});
