const exercises = {
    muscle: {
        beginner: {
            dumbbells: [
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 60 },
                { name: "Dumbbell Chest Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 60 },
                { name: "Dumbbell Lateral Raises", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
                { name: "Dumbbell Hammer Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 50 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 12, rest: 60, timePerSet: 35 },
            ],
            bodyweight: [
                { name: "Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 10, rest: 60, timePerSet: 30 },
                { name: "Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 45 },
                { name: "Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 60, timePerSet: 30 },
                { name: "Crunches", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
                { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
                { name: "Incline Push-ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 25 },
                { name: "Wall Sit", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 60, timePerSet: 30 },
                { name: "Leg Raises", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Superman", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
            ],
            machines: [
                { name: "Chest Press Machine", muscleGroup: "chest & triceps", label: "2", equipment: "Machines", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
                { name: "Lat Pulldown Machine", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
                { name: "Leg Press Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 12, rest: 60, timePerSet: 50 },
                { name: "Seated Row Machine", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
                { name: "Shoulder Press Machine", muscleGroup: "delts & traps", label: "4", equipment: "Machines", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
                { name: "Leg Extension Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Hamstring Curl Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
                { name: "Calf Raise Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 15, rest: 60, timePerSet: 25 },
                { name: "Ab Crunch Machine", muscleGroup: "core & cardio", label: "5", equipment: "Machines", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
                { name: "Back Extension Machine", muscleGroup: "legs & back", label: "3", equipment: "Machines", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
            ],
            barbells: [
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 3, reps: 8, rest: 75, timePerSet: 60 },
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 75, timePerSet: 75 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 3, reps: 8, rest: 75, timePerSet: 60 },
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 8, rest: 75, timePerSet: 60 },
                { name: "Barbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 75, timePerSet: 75 },
                { name: "Barbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Barbells", sets: 3, reps: 10, rest: 75, timePerSet: 45 },
                { name: "Barbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Barbells", sets: 3, reps: 10, rest: 75, timePerSet: 45 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 75, timePerSet: 75 },
                { name: "Barbell Shrugs", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 12, rest: 75, timePerSet: 30 },
                { name: "Barbell Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 15, rest: 75, timePerSet: 30 },
            ],
        },
        intermediate: {
            barbell: [
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 4, reps: 8, rest: 90, timePerSet: 75 },
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 8, rest: 90, timePerSet: 90 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 4, reps: 8, rest: 90, timePerSet: 75 },
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 4, reps: 8, rest: 90, timePerSet: 75 },
                { name: "Barbell Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 3, reps: 6, rest: 120, timePerSet: 90 }, // Multi-label
                { name: "Barbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 10, rest: 90, timePerSet: 90 },
                { name: "Barbell Hip Thrusts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 10, rest: 90, timePerSet: 60 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 10, rest: 90, timePerSet: 90 },
                { name: "Barbell Shrugs", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 4, reps: 12, rest: 90, timePerSet: 35 },
                { name: "Barbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Barbells", sets: 4, reps: 10, rest: 90, timePerSet: 50 },
            ],
            gym: [
                { name: "Lat Pulldowns", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 4, reps: 10, rest: 75, timePerSet: 45 },
                { name: "Leg Press", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 4, reps: 10, rest: 75, timePerSet: 60 },
                { name: "Cable Rows", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 4, reps: 10, rest: 75, timePerSet: 45 },
                { name: "Chest Flyes", muscleGroup: "chest & triceps", label: "2", equipment: "Machines", sets: 4, reps: 12, rest: 75, timePerSet: 40 },
                { name: "Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: "25", rest: 90, timePerSet: 60 }, // Assuming ~25 seconds for a set
                { name: "Dips", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 }, // Multi-label
                { name: "Leg Extensions", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 4, reps: 12, rest: 75, timePerSet: 30 },
                { name: "Hamstring Curls", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 4, reps: 12, rest: 75, timePerSet: 30 },
                { name: "Cable Triceps Pushdowns", muscleGroup: "chest & triceps", label: "4", equipment: "Machines", sets: 4, reps: 12, rest: 75, timePerSet: 30 },
                { name: "Face Pulls", muscleGroup: "delts & traps", label: "4", equipment: "Machines", sets: 4, reps: 15, rest: 75, timePerSet: 35 },
            ],
            dumbbells: [
                { name: "Dumbbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 4, reps: 10, rest: 75, timePerSet: 50 },
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 4, reps: 10, rest: 75, timePerSet: 50 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 4, reps: 10, rest: 75, timePerSet: 45 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 75 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 75 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 35 },
                { name: "Dumbbell Hammer Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 35 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 40 },
                { name: "Dumbbell Lateral Raises", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 4, reps: 15, rest: 75, timePerSet: 35 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 12, rest: 75, timePerSet: 60 },
            ],
            bodyweight: [
                { name: "Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 4, reps: "25", rest: 75, timePerSet: 50 },
                { name: "Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 4, reps: 15, rest: 60, timePerSet: 40 },
                { name: "Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 4, reps: 15, rest: 60, timePerSet: 60 },
                { name: "Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 4, reps: "45 sec", rest: 60, timePerSet: 45 },
                { name: "Crunches", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 4, reps: 20, rest: 60, timePerSet: 35 },
                { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 4, reps: 20, rest: 60, timePerSet: 35 },
                { name: "Incline Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 4, reps: 15, rest: 60, timePerSet: 35 },
                { name: "Wall Sit", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 4, reps: "45 sec", rest: 60, timePerSet: 45 },
                { name: "Leg Raises", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 4, reps: 15, rest: 60, timePerSet: 35 },
                { name: "Superman", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 4, reps: 20, rest: 60, timePerSet: 35 },
            ],
        },
        advanced: {
            gym: [
                { name: "Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 3, reps: 6, rest: 120, timePerSet: 75 }, // Multi-label
                { name: "Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Barbell Hip Thrusts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 120, timePerSet: 60 },
                { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Weighted Dips", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 6, rest: 120, timePerSet: 60 }, // Multi-label
                { name: "Barbell Rows Pendlay", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Incline Barbell Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 75 },
                { name: "Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 75 },
                { name: "Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 120, timePerSet: 75 },
            ],
            barbell: [
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 6, rest: 120, timePerSet: 90 },
                { name: "Barbell Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 3, reps: 5, rest: 180, timePerSet: 90 }, // Multi-label
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Barbell Hip Thrusts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 4, reps: 8, rest: 120, timePerSet: 90 },
                { name: "Barbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Barbells", sets: 4, reps: 8, rest: 120, timePerSet: 50 },
                { name: "Barbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Barbells", sets: 4, reps: 8, rest: 120, timePerSet: 50 },
                { name: "Barbell Shrugs", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 4, reps: 10, rest: 120, timePerSet: 35 },
            ],
            dumbbells: [
                { name: "Dumbbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 4, reps: 8, rest: 120, timePerSet: 50 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 90 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 90 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 40 },
                { name: "Dumbbell Hammer Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 40 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 50 },
                { name: "Dumbbell Lateral Raises", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 4, reps: 12, rest: 120, timePerSet: 40 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 4, reps: 10, rest: 120, timePerSet: 75 },
            ],
            bodyweight: [
                { name: "Push ups Weighted", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
                { name: "Pistol Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Pull ups Weighted", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
                { name: "Dips Weighted", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 4, reps: "AMRAP", rest: 120, timePerSet: 60 }, // Multi-label
                { name: "Handstand Push ups", muscleGroup: "delts & traps", label: "4", equipment: "Bodyweight", sets: 3, reps: "As many as 5", rest: 120, timePerSet: 90 },
                { name: "Muscle ups", muscleGroup: "back & biceps, chest & triceps", label: "2, 3", equipment: "Bodyweight", sets: 3, reps: "5", rest: 180, timePerSet: 120 }, // Multi-label
                { name: "Planche Leans", muscleGroup: "delts & traps, core & cardio", label: "4, 5", equipment: "Bodyweight", sets: 3, reps: "15", rest: 120, timePerSet: 60 }, // Multi-label
                { name: "Front Lever Holds", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Bodyweight", sets: 3, reps: "15 sec hold", rest: 120, timePerSet: 15 }, // Multi-label
                { name: "One Arm Pull ups Assisted", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 90 },
                { name: "Advanced Plank Variations", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "60 sec hold", rest: 120, timePerSet: 60 },
            ],
        },
    },
strength: {
        beginner: {
            bodyweight: [
                { name: "Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 8, rest: 90, timePerSet: 30 },
                { name: "Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 10, rest: 90, timePerSet: 30 },
                { name: "Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "20 sec", rest: 90, timePerSet: 20 },
                { name: "Incline Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 10, rest: 90, timePerSet: 25 },
                { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
                { name: "Walking Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
                { name: "Wall Sit", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 90, timePerSet: 30 },
                { name: "Crunches", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
                { name: "Superman", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
                { name: "Knee Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
            ],
            dumbbells: [
                { name: "Dumbbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
                { name: "Dumbbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 40 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 30 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 35 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 50 },
                { name: "Dumbbell Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
            ],
            barbells: [
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
                { name: "Barbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
                { name: "Barbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Barbells", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Barbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Barbells", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Barbell Shrugs", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
                { name: "Barbell Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
            ],
            machines: [
                { name: "Leg Press Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Chest Press Machine", muscleGroup: "chest & triceps", label: "2", equipment: "Machines", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Lat Pulldown Machine", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Seated Row Machine", muscleGroup: "back & biceps", label: "3", equipment: "Machines", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Shoulder Press Machine", muscleGroup: "delts & traps", label: "4", equipment: "Machines", sets: 3, reps: 10, rest: 90, timePerSet: 35 },
                { name: "Leg Extension Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
                { name: "Hamstring Curl Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
                { name: "Calf Raise Machine", muscleGroup: "legs & back", label: "1", equipment: "Machines", sets: 3, reps: 15, rest: 90, timePerSet: 20 },
                { name: "Ab Crunch Machine", muscleGroup: "core & cardio", label: "5", equipment: "Machines", sets: 3, reps: 15, rest: 90, timePerSet: 15 },
                { name: "Back Extension Machine", muscleGroup: "legs & back", label: "3", equipment: "Machines", sets: 3, reps: 15, rest: 90, timePerSet: 25 },
            ],
        },
intermediate: {
            barbell: [
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
                { name: "Barbell Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 180, timePerSet: 60 }, // Multi-label
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 5, rest: 120, timePerSet: 60 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 3, reps: 5, rest: 120, timePerSet: 60 },
                { name: "Barbell Power Cleans", muscleGroup: "legs & back, delts & traps", label: "1, 4", equipment: "Barbells", sets: 3, reps: 3, rest: 120, timePerSet: 45 }, // Multi-label
                { name: "Barbell Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 5, rest: 120, timePerSet: 75 },
                { name: "Barbell Good Mornings", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
                { name: "Barbell Shrugs", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 8, rest: 90, timePerSet: 20 },
            ],
            dumbbells: [
                { name: "Dumbbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 35 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
                { name: "Dumbbell Pull overs", muscleGroup: "chest & triceps, back & biceps", label: "2, 3", equipment: "Dumbbells", sets: 3, reps: 12, rest: 90, timePerSet: 40 }, // Multi-label
                { name: "Dumbbell Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
            ],
            bodyweight: [
                { name: "Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 },
                { name: "Dips", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 }, // Multi-label
                { name: "Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 },
                { name: "Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "45 sec", rest: 90, timePerSet: 45 },
                { name: "Chin ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 },
                { name: "Inverted Rows", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: "AMRAP", rest: 90, timePerSet: 45 },
                { name: "Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 60 },
                { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
                { name: "Hanging Leg Raises", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 90, timePerSet: 45 },
                { name: "Back Extensions", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
            ],
        },
      advanced: {
            gym: [
                { name: "Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 75 }, // Multi-label
                { name: "Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 75 },
                { name: "Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 90 },
                { name: "Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 60 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 60 },
                { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 5, rest: 240, timePerSet: 75 },
                { name: "Weighted Dips", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 5, rest: 240, timePerSet: 60 }, // Multi-label
                { name: "Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 5, rest: 240, timePerSet: 75 },
                { name: "Power Cleans", muscleGroup: "legs & back, delts & traps", label: "1, 4", equipment: "Barbells", sets: 3, reps: 3, rest: 240, timePerSet: 45 }, // Multi-label
                { name: "Snatch", muscleGroup: "legs & back, delts & traps", label: "1, 4", equipment: "Barbells", sets: 3, reps: 2, rest: 240, timePerSet: 45 }, // Multi-label
            ],
            barbell: [
                { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 3, rest: 240, timePerSet: 75 },
                { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 3, rest: 240, timePerSet: 75 },
                { name: "Barbell Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 3, reps: 3, rest: 300, timePerSet: 60 }, // Multi-label
                { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 5, reps: 3, rest: 240, timePerSet: 60 },
                { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 3, rest: 240, timePerSet: 60 },
                { name: "Barbell Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 3, rest: 240, timePerSet: 75 },
                { name: "Barbell Power Cleans", muscleGroup: "legs & back, delts & traps", label: "1, 4", equipment: "Barbells", sets: 3, reps: 2, rest: 240, timePerSet: 45 }, // Multi-label
                { name: "Barbell Snatch", muscleGroup: "legs & back, delts & traps", label: "1, 4", equipment: "Barbells", sets: 3, reps: 1, rest: 240, timePerSet: 45 }, // Multi-label
                { name: "Barbell Good Mornings", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 5, rest: 180, timePerSet: 45 },
                { name: "Barbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
            ],
            dumbbells: [
                { name: "Dumbbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Dumbbells", sets: 3, reps: 5, rest: 180, timePerSet: 50 },
                { name: "Dumbbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Dumbbells", sets: 3, reps: 5, rest: 180, timePerSet: 50 },
                { name: "Dumbbell Shoulder Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 5, rest: 180, timePerSet: 45 },
                { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180, timePerSet: 75 },
                { name: "Dumbbell Lunges", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180, timePerSet: 75 },
                { name: "Dumbbell Bicep Curls", muscleGroup: "back & biceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180, timePerSet: 35 },
                { name: "Dumbbell Triceps Extensions", muscleGroup: "chest & triceps", label: "4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180, timePerSet: 40 },
                { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 8, rest: 180, timePerSet: 60 },
                { name: "Dumbbell Pull overs", muscleGroup: "chest & triceps, back & biceps", label: "2, 3", equipment: "Dumbbells", sets: 3, reps: 10, rest: 180, timePerSet: 40 }, // Multi-label
                { name: "Dumbbell Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Dumbbells", sets: 3, reps: 10, rest: 180, timePerSet: 25 },
            ],
            bodyweight: [
                { name: "Pull ups Weighted", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
                { name: "Dips Weighted", muscleGroup: "chest & triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 5, rest: 180, timePerSet: 45 }, // Multi-label
                { name: "Push ups Plyometric", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 8, rest: 120, timePerSet: 30 },
                { name: "Pistol Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 5, rest: 180, timePerSet: 75 },
                { name: "Handstand Push ups Assisted", muscleGroup: "delts & traps", label: "4", equipment: "Bodyweight", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
                { name: "Front Lever Holds Progression", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Bodyweight", sets: 3, reps: "10 sec", rest: 180, timePerSet: 10 }, // Multi-label
                { name: "Back Lever Holds Progression", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Bodyweight", sets: 3, reps: "10 sec ", rest: 180, timePerSet: 10 }, // Multi-label
                { name: "Muscle ups Progression", muscleGroup: "back & biceps, chest & triceps", label: "2, 3", equipment: "Bodyweight", sets: 3, reps: 3, rest: 180, timePerSet: 90 }, // Multi-label
                { name: "One Arm Push up Progression", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 3, rest: 120, timePerSet: 45 },
                { name: "Dragon Flags Progression", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 8, rest: 120, timePerSet: 45 },
            ],
        },
    },
endurance: {
    beginner: {
        bodyweight: [
            { name: "Jumping Jacks", muscleGroup: "cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
            { name: "High Knees", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
            { name: "Walking", muscleGroup: "cardio, legs", label: "1, 5", equipment: "None", sets: 1, reps: "600 sec", rest: 30, timePerSet: 600 },
            { name: "Butt Kicks", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
            { name: "Mountain Climbers", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 40, timePerSet: 20 },
            { name: "Step ups", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Optional Step", sets: 3, reps: 10, rest: 30, timePerSet: 30 },
            { name: "Burpees (Beginner - No Jump)", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 2, reps: 8, rest: 60, timePerSet: 45 },
            { name: "Shadow Boxing", muscleGroup: "cardio, shoulders, arms", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 45, rest: 30, timePerSet: 45 },
            { name: "Plank Jacks", muscleGroup: "cardio, core", label: "2, 5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 30, timePerSet: 20 },
            { name: "Lateral Shuffles", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 30, timePerSet: 25 },
        ],
        dumbbells: [
            { name: "Dumbbell Thrusters", muscleGroup: "legs & back, delts & traps, chest & triceps, core & cardio, full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45, timePerSet: 40 },
            { name: "Dumbbell Swings", muscleGroup: "legs & back, glutes, hamstrings, core & cardio, full body, cardio", label: "1, 3, 5", equipment: "Dumbbells", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
            { name: "Dumbbell Shadow Boxing", muscleGroup: "delts & traps, chest & triceps, back & biceps, cardio, shoulders, arms", label: "2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
            { name: "Dumbbell Russian Twists", muscleGroup: "core & cardio, obliques, core", label: "2, 5", equipment: "Dumbbells", sets: 3, reps: 15, rest: 30, timePerSet: 30 },
            { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back, core & cardio, legs, glutes, core", label: "1, 2, 5", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45, timePerSet: 40 },
            { name: "Dumbbell Overhead Press (Light)", muscleGroup: "delts & traps, chest & triceps, shoulders, arms, cardio", label: "2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45, timePerSet: 35 },
        ],
        gym: [
            { name: "Treadmill Run", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Treadmill", sets: 1, reps: "600 sec", rest: 30, timePerSet: 600 },
            { name: "Elliptical", muscleGroup: "legs & back, delts & traps, chest & triceps, back & biceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Elliptical", sets: 1, reps: "600 sec", rest: 30, timePerSet: 600 },
            { name: "Stationary Bike", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Stationary Bike", sets: 1, reps: "600 sec", rest: 30, timePerSet: 600 },
            { name: "Rowing Machine (Low Intensity)", muscleGroup: "legs & back, delts & traps, back & biceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Rowing Machine", sets: 1, reps: "480 sec", rest: 60, timePerSet: 480 },
            { name: "Stair Climber (Slow Pace)", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Stair Climber", sets: 1, reps: "480 sec", rest: 60, timePerSet: 480 },
        ],
    },
     intermediate: {
        bodyweight: [
            { name: "Jumping Jacks", muscleGroup: "cardio", label: "5", equipment: "Bodyweight", sets: 4, reps: 45, rest: 30, timePerSet: 45 },
            { name: "High Knees", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 4, reps: 45, rest: 30, timePerSet: 45 },
            { name: "Running in Place", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 1, reps: "480 sec", rest: 30, timePerSet: 480 },
            { name: "Butt Kicks", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 4, reps: 45, rest: 30, timePerSet: 45 },
            { name: "Mountain Climbers", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 4, reps: 30, rest: 40, timePerSet: 30 },
            { name: "Step ups", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Optional Step", sets: 4, reps: 15, rest: 30, timePerSet: 35 },
            { name: "Burpees", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 60, timePerSet: 60 },
            { name: "Shadow Boxing", muscleGroup: "cardio, shoulders, arms", label: "2, 4, 5", equipment: "Bodyweight", sets: 4, reps: 60, rest: 30, timePerSet: 60 },
            { name: "Plank Jacks", muscleGroup: "cardio, core", label: "2, 5", equipment: "Bodyweight", sets: 4, reps: 30, rest: 30, timePerSet: 30 },
            { name: "Lateral Bounds", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 45, timePerSet: 30 },
            { name: "Jump Squats", muscleGroup: "legs & back, core & cardio, legs, glutes, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 35 },
            { name: "Inchworms", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, hamstrings", label: "1, 2, 3, 4, 5", equipment: "Bodyweight", sets: 3, reps: 8, rest: 45, timePerSet: 40 },
        ],
        dumbbells: [
            { name: "Dumbbell Thrusters", muscleGroup: "legs & back, delts & traps, chest & triceps, core & cardio, full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 4, reps: 12, rest: 45, timePerSet: 45 },
            { name: "Dumbbell Swings", muscleGroup: "legs & back, glutes, hamstrings, core & cardio, full body, cardio", label: "1, 3, 5", equipment: "Dumbbells", sets: 4, reps: 20, rest: 45, timePerSet: 35 },
            { name: "Dumbbell Shadow Boxing", muscleGroup: "delts & traps, chest & triceps, back & biceps, cardio, shoulders, arms", label: "2, 4, 5", equipment: "Dumbbells", sets: 4, reps: 45, rest: 30, timePerSet: 45 },
            { name: "Dumbbell Russian Twists", muscleGroup: "core & cardio, obliques, core", label: "2, 5", equipment: "Dumbbells", sets: 4, reps: 20, rest: 30, timePerSet: 35 },
            { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back, core & cardio, legs, glutes, core", label: "1, 2, 5", equipment: "Dumbbells", sets: 4, reps: 15, rest: 45, timePerSet: 45 },
            { name: "Dumbbell Overhead Press", muscleGroup: "delts & traps, chest & triceps, shoulders, arms, cardio", label: "2, 4, 5", equipment: "Dumbbells", sets: 4, reps: 10, rest: 45, timePerSet: 40 },
            { name: "Dumbbell Farmer's Walk", muscleGroup: "legs & back, delts & traps, back & biceps, core & cardio, full body, core, grip", label: "2, 3, 5", equipment: "Dumbbells", sets: 3, reps: "60 sec", rest: 60, timePerSet: 60 },
            { name: "Dumbbell Lateral Raises", muscleGroup: "delts & traps, shoulders, cardio", label: "2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 15, rest: 45, timePerSet: 35 },
        ],
        gym: [
            { name: "Treadmill Run", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Treadmill", sets: 1, reps: "900 sec", rest: 30, timePerSet: 900 },
            { name: "Elliptical", muscleGroup: "legs & back, delts & traps, chest & triceps, back & biceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Elliptical", sets: 1, reps: "900 sec", rest: 30, timePerSet: 900 },
            { name: "Stationary Bike", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Stationary Bike", sets: 1, reps: "900 sec", rest: 30, timePerSet: 900 },
            { name: "Rowing Machine", muscleGroup: "legs & back, delts & traps, back & biceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Rowing Machine", sets: 1, reps: "600 sec", rest: 60, timePerSet: 600 },
            { name: "Stair Climber", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Stair Climber", sets: 1, reps: "600 sec", rest: 60, timePerSet: 600 },
            { name: "Assault Bike", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Assault Bike", sets: 3, reps: "30 sec", rest: 30, timePerSet: 30 },
            { name: "Ski Erg", muscleGroup: "delts & traps, back & biceps, core & cardio, upper body, core, cardio", label: "2, 3, 4, 5", equipment: "Ski Erg", sets: 3, reps: "45 sec", rest: 45, timePerSet: 45 },
        ],
    },
advanced: {
    bodyweight: [
        { name: "Jumping Jacks", muscleGroup: "cardio", label: "5", equipment: "Bodyweight", sets: 5, reps: 60, rest: 30, timePerSet: 60 },
        { name: "High Knees", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 5, reps: 60, rest: 30, timePerSet: 60 },
        { name: "Running in Place (High Intensity)", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 1, reps: "720 sec", rest: 30, timePerSet: 720 },
        { name: "Butt Kicks", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 5, reps: 60, rest: 30, timePerSet: 60 },
        { name: "Mountain Climbers", muscleGroup: "cardio, core, shoulders", label: "2, 4, 5", equipment: "Bodyweight", sets: 5, reps: 40, rest: 40, timePerSet: 40 },
        { name: "Step ups (with Weight Vest)", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Weight Vest", sets: 4, reps: 20, rest: 30, timePerSet: 40 },
        { name: "Burpees (with Pull-up)", muscleGroup: "full body, cardio, back, arms", label: "1, 2, 3, 4, 5, 6", equipment: "Pull-up Bar", sets: 3, reps: 8, rest: 75, timePerSet: 75 }, // Added label 6
        { name: "Shadow Boxing (with Ankle Weights)", muscleGroup: "cardio, shoulders, arms", label: "2, 4, 5", equipment: "Ankle Weights", sets: 4, reps: 75, rest: 30, timePerSet: 75 },
        { name: "Plank Jacks", muscleGroup: "cardio, core", label: "2, 5", equipment: "Bodyweight", sets: 5, reps: 40, rest: 30, timePerSet: 40 },
        { name: "Lateral Bounds (Long Distance)", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 4, reps: 15, rest: 45, timePerSet: 35 },
        { name: "Jump Squats", muscleGroup: "legs, glutes, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 4, reps: 20, rest: 45, timePerSet: 40 },
        { name: "Inchworms", muscleGroup: "full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Bodyweight", sets: 4, reps: 10, rest: 45, timePerSet: 45 },
        { name: "Handstand Holds (Progression for Cardio)", muscleGroup: "shoulders, core, cardio", label: "2, 4, 5, 6", equipment: "Bodyweight", sets: 3, reps: "30 sec hold", rest: 60, timePerSet: 30 }, // Added label 6
    ],
    dumbbells: [
        { name: "Dumbbell Thrusters", muscleGroup: "full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 5, reps: 15, rest: 45, timePerSet: 50 },
        { name: "Dumbbell Swings", muscleGroup: "full body, cardio", label: "1, 3, 5", equipment: "Dumbbells", sets: 5, reps: 25, rest: 45, timePerSet: 40 },
        { name: "Dumbbell Shadow Boxing (Heavy)", muscleGroup: "cardio, shoulders, arms", label: "2, 4, 5", equipment: "Dumbbells", sets: 5, reps: 60, rest: 30, timePerSet: 60 },
        { name: "Dumbbell Russian Twists", muscleGroup: "core, cardio", label: "2, 5", equipment: "Dumbbells", sets: 5, reps: 25, rest: 30, timePerSet: 40 },
        { name: "Dumbbell Goblet Squats", muscleGroup: "legs, core, cardio", label: "1, 2, 5", equipment: "Dumbbells", sets: 5, reps: 18, rest: 45, timePerSet: 50 },
        { name: "Dumbbell Overhead Press", muscleGroup: "shoulders, arms, cardio", label: "2, 4, 5", equipment: "Dumbbells", sets: 5, reps: 12, rest: 45, timePerSet: 45 },
        { name: "Dumbbell Farmer's Walk (Heavy)", muscleGroup: "full body, core, grip", label: "2, 3, 5", equipment: "Dumbbells", sets: 4, reps: "90 sec", rest: 60, timePerSet: 90 },
        { name: "Dumbbell Lateral Raises", muscleGroup: "shoulders, cardio", label: "2, 4, 5", equipment: "Dumbbells", sets: 4, reps: 20, rest: 45, timePerSet: 40 },
        { name: "Dumbbell Burpees", muscleGroup: "full body, cardio", label: "1, 2, 3, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 75, timePerSet: 75 },
        { name: "Dumbbell Step Ups", muscleGroup: "legs, cardio", label: "1, 5", equipment: "Dumbbells, Step", sets: 4, reps: 15, rest: 45, timePerSet: 40 },
    ],
    gym: [
        { name: "Treadmill Intervals (Sprints)", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Treadmill", sets: 5, reps: "30 sec sprint / 30 sec rest", rest: 60, timePerSet: 60 },
        { name: "Elliptical Intervals (High Resistance)", muscleGroup: "cardio, full body", label: "1, 2, 3, 5", equipment: "Elliptical", sets: 5, reps: "45 sec high / 15 sec low", rest: 60, timePerSet: 60 },
        { name: "Stationary Bike Intervals (Hill Climbs)", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Stationary Bike", sets: 5, reps: "60 sec hard / 30 sec easy", rest: 60, timePerSet: 90 },
        { name: "Rowing Machine Intervals (Power Strokes)", muscleGroup: "cardio, full body", label: "1, 2, 3, 5", equipment: "Rowing Machine", sets: 5, reps: "30 sec power / 30 sec light", rest: 75, timePerSet: 60 },
        { name: "Stair Climber Intervals (High Speed)", muscleGroup: "cardio, legs", label: "1, 5", equipment: "Stair Climber", sets: 5, reps: "45 sec fast / 15 sec slow", rest: 60, timePerSet: 60 },
        { name: "Assault Bike Intervals (Max Effort)", muscleGroup: "cardio, full body", label: "1, 2, 3, 5", equipment: "Assault Bike", sets: 5, reps: "20 sec max / 40 sec rest", rest: 90, timePerSet: 60 },
        { name: "Ski Erg Intervals (Explosive Pulls)", muscleGroup: "cardio, upper body, core", label: "2, 3, 4, 5", equipment: "Ski Erg", sets: 5, reps: "30 sec hard / 30 sec easy", rest: 75, timePerSet: 60 },
        { name: "Sled Pushes (Light Weight, Short Sprints)", muscleGroup: "cardio, legs, core", label: "1, 2, 3, 5", equipment: "Sled", sets: 4, reps: "20 meters", rest: 60, timePerSet: 30 },
        { name: "Battle Ropes (Various Patterns)", muscleGroup: "cardio, shoulders, arms, core", label: "2, 4, 5", equipment: "Battle Ropes", sets: 4, reps: "45 sec work / 15 sec rest", rest: 60, timePerSet: 60 },
    ],
  },
},
fatloss: {
    beginner: {
        bodyweight: [
            { name: "Jumping Jacks", muscleGroup: "core & cardio, cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
            { name: "Squats", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
            { name: "Push ups (on knees or full)", muscleGroup: "chest & triceps, delts & traps, core & cardio, chest, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 45, timePerSet: 25 },
            { name: "High Knees", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
            { name: "Walking Lunges", muscleGroup: "legs & back, core & cardio, legs, glutes, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 3, reps: "10 per leg", rest: 30, timePerSet: 60 },
            { name: "Plank", muscleGroup: "core & cardio, core, cardio", label: "2, 5", equipment: "Bodyweight", sets: 3, reps: "30 sec hold", rest: 30, timePerSet: 30 },
            { name: "Butt Kicks", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
            { name: "Glute Bridges", muscleGroup: "legs & back, glutes, hamstrings", label: "3", equipment: "Bodyweight", sets: 3, reps: 15, rest: 30, timePerSet: 30 },
            { name: "Bird Dog", muscleGroup: "legs & back, core & cardio, core, back", label: "2, 3", equipment: "Bodyweight", sets: 3, reps: "10 per side", rest: 30, timePerSet: 40 },
            { name: "Step Ups (low step)", muscleGroup: "legs & back, core & cardio, legs, glutes, cardio", label: "1, 3, 5", equipment: "Step", sets: 3, reps: "10 per leg", rest: 30, timePerSet: 45 },
        ],
        dumbbells: [
            { name: "Dumbbell Squat to Press", muscleGroup: "legs & back, delts & traps, chest & triceps, core & cardio, full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45, timePerSet: 45 },
            { name: "Dumbbell Rows", muscleGroup: "legs & back, back & biceps, back", label: "3", equipment: "Dumbbells", sets: 3, reps: "12 per arm", rest: 45, timePerSet: 40 },
            { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back, hamstrings, glutes, lower back", label: "1, 3", equipment: "Dumbbells", sets: 3, reps: 15, rest: 45, timePerSet: 60 },
            { name: "Dumbbell Thrusters", muscleGroup: "legs & back, delts & traps, chest & triceps, core & cardio, full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45, timePerSet: 40 },
            { name: "Dumbbell Step ups", muscleGroup: "legs & back, core & cardio, legs, glutes, cardio", label: "1, 3, 5", equipment: "Dumbbells, Step", sets: 3, reps: "10 per leg", rest: 30, timePerSet: 45 },
            { name: "Dumbbell Goblet Squats", muscleGroup: "legs & back, core & cardio, legs, glutes, core, cardio", label: "1, 2, 3, 5", equipment: "Dumbbell", sets: 3, reps: 12, rest: 45, timePerSet: 40 },
            { name: "Dumbbell Shoulder Press (light)", muscleGroup: "delts & traps, chest & triceps, core & cardio, shoulders, triceps, cardio", label: "2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45, timePerSet: 35 },
            { name: "Dumbbell Farmer's Walk (light)", muscleGroup: "legs & back, core & cardio, back & biceps, delts & traps, full body, core, grip, cardio", label: "2, 3, 5", equipment: "Dumbbells", sets: 3, reps: "60 sec", rest: 60, timePerSet: 60 },
        ],
        gym: [
            { name: "Treadmill Walk or Jog", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Treadmill", sets: 1, reps: "1200 sec", rest: 30, timePerSet: 1200 },
            { name: "Elliptical Trainer", muscleGroup: "legs & back, delts & traps, chest & triceps, back & biceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Elliptical", sets: 1, reps: "1200 sec", rest: 30, timePerSet: 1200 },
            { name: "Stationary Bike", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Stationary Bike", sets: 1, reps: "1200 sec", rest: 30, timePerSet: 1200 },
            { name: "Rowing Machine (steady pace)", muscleGroup: "legs & back, delts & traps, back & biceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Rowing Machine", sets: 1, reps: "900 sec", rest: 30, timePerSet: 900 },
            { name: "Stair Climber (moderate pace)", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Stair Climber", sets: 1, reps: "900 sec", rest: 30, timePerSet: 900 },
            { name: "Leg Press Machine (higher reps, lower weight)", muscleGroup: "legs & back, legs, glutes", label: "1, 3", equipment: "Machines", sets: 3, reps: 15, rest: 45, timePerSet: 40 },
            { name: "Lat Pulldown Machine (higher reps, lower weight)", muscleGroup: "legs & back, back & biceps, back, biceps", label: "3, 4", equipment: "Machines", sets: 3, reps: 15, rest: 45, timePerSet: 40 },
        ],
    },
    intermediate: {
        bodyweight: [
            { name: "Burpees", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 60 },
            { name: "Mountain Climbers", muscleGroup: "core & cardio, delts & traps, core, shoulders, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 45, rest: 30, timePerSet: 45 },
            { name: "Walking Lunges", muscleGroup: "legs & back, core & cardio, legs, glutes, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 3, reps: "12 per leg", rest: 45, timePerSet: 75 },
            { name: "Jump Squats", muscleGroup: "legs & back, core & cardio, legs, glutes, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 45, timePerSet: 30 },
            { name: "Plank Jacks", muscleGroup: "core & cardio, core, cardio", label: "2, 5", equipment: "Bodyweight", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
            { name: "Skater Jumps", muscleGroup: "legs & back, core & cardio, legs, glutes, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: "20 per leg", rest: 30, timePerSet: 45 },
            { name: "Push ups", muscleGroup: "chest & triceps, delts & traps, core & cardio, chest, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
            { name: "Bodyweight Rows (using furniture or low bar)", muscleGroup: "legs & back, back & biceps, core & cardio, back, biceps, cardio", label: "3, 4, 5", equipment: "Furniture or Low Bar", sets: 3, reps: 12, rest: 45, timePerSet: 40 },
            { name: "Reverse Lunges", muscleGroup: "legs & back, core & cardio, legs, glutes, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 3, reps: "12 per leg", rest: 45, timePerSet: 60 },
            { name: "Side Plank", muscleGroup: "core & cardio, core, obliques", label: "2", equipment: "Bodyweight", sets: 3, reps: "45 sec hold per side", rest: 30, timePerSet: 90 },
        ],
        dumbbells: [
            { name: "Dumbbell Snatches", muscleGroup: "legs & back, delts & traps, back & biceps, core & cardio, full body, cardio", label: "1, 3, 4, 5", equipment: "Dumbbells", sets: 3, reps: "12 per arm", rest: 45, timePerSet: 45 },
            { name: "Dumbbell Push Press", muscleGroup: "legs & back, delts & traps, chest & triceps, core & cardio, shoulders, triceps, legs, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 15, rest: 45, timePerSet: 40 },
            { name: "Dumbbell Renegade Rows", muscleGroup: "legs & back, back & biceps, core & cardio, back, core, cardio", label: "3, 5", equipment: "Dumbbells", sets: 3, reps: "12 per arm", rest: 45, timePerSet: 60 },
            { name: "Dumbbell Walking Lunges", muscleGroup: "legs & back, core & cardio, legs, glutes, cardio", label: "1, 3, 5", equipment: "Dumbbells", sets: 3, reps: "12 per leg", rest: 30, timePerSet: 75 },
            { name: "Dumbbell Burpees", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 45, timePerSet: 60 },
            { name: "Dumbbell Thrusters", muscleGroup: "legs & back, delts & traps, chest & triceps, core & cardio, full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 3, reps: 12, rest: 45, timePerSet: 45 },
            { name: "Dumbbell Romanian Deadlifts", muscleGroup: "legs & back, hamstrings, glutes, lower back", label: "1, 3", equipment: "Dumbbells", sets: 3, reps: 18, rest: 45, timePerSet: 75 },
            { name: "Dumbbell Overhead Squats", muscleGroup: "legs & back, delts & traps, core & cardio, full body, core, shoulders, cardio", label: "1, 2, 3, 4, 5", equipment: "Dumbbells", sets: 3, reps: 10, rest: 60, timePerSet: 60 },
        ],
        gym: [
            { name: "Treadmill Intervals (walk/jog)", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Treadmill", sets: 4, reps: "60 sec jog / 30 sec walk", rest: 60, timePerSet: 120 },
            { name: "Elliptical Intervals (moderate resistance)", muscleGroup: "legs & back, delts & traps, chest & triceps, back & biceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Elliptical", sets: 4, reps: "60 sec hard / 30 sec easy", rest: 60, timePerSet: 120 },
            { name: "Stationary Bike Intervals (moderate resistance)", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Stationary Bike", sets: 4, reps: "60 sec hard / 30 sec easy", rest: 60, timePerSet: 120 },
            { name: "Rowing Machine Intervals", muscleGroup: "legs & back, delts & traps, back & biceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Rowing Machine", sets: 4, reps: "45 sec hard / 15 sec easy", rest: 60, timePerSet: 60 },
            { name: "Stair Climber Intervals", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Stair Climber", sets: 4, reps: "45 sec fast / 15 sec slow", rest: 60, timePerSet: 60 },
            { name: "Battle Ropes Intervals", muscleGroup: "delts & traps, back & biceps, core & cardio, shoulders, arms, core, cardio", label: "2, 4, 5", equipment: "Battle Ropes", sets: 3, reps: "45 sec work / 15 sec rest", rest: 60, timePerSet: 60 },
            { name: "Sled Push (light weight)", muscleGroup: "legs & back, core & cardio, legs, core, cardio", label: "1, 3, 5", equipment: "Sled", sets: 3, reps: "30 meters", rest: 60, timePerSet: 45 },
        ],
    },
advanced: {
        bodyweight: [
            { name: "High Intensity Burpee Variations", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 4, reps: 20, rest: 30, timePerSet: 45 },
            { name: "Advanced Plyometric Circuit", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 4, reps: 15, rest: 45, timePerSet: 60 },
            { name: "Complex Bodyweight Movements (e.g., Burpee Pull-ups)", muscleGroup: "legs & back, back & biceps, chest & triceps, delts & traps, core & cardio, full body, back, arms, cardio", label: "1, 2, 3, 4, 5, 6", equipment: "Pull-up Bar", sets: 4, reps: 10, rest: 60, timePerSet: 75 },
            { name: "Sprint Intervals (uphill or with resistance)", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Hill or Resistance Bands", sets: 6, reps: "100m", rest: 60, timePerSet: 30 },
            { name: "Hill Sprints with Burpees", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Hill, Bodyweight", sets: 5, reps: "50m sprint + 5 burpees", rest: 90, timePerSet: 90 },
            { name: "Plyometric Push ups", muscleGroup: "chest & triceps, delts & traps, core & cardio, chest, shoulders, triceps, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 4, reps: 10, rest: 45, timePerSet: 45 },
            { name: "Single Leg Burpees", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio, balance", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 3, reps: "8 per leg", rest: 60, timePerSet: 75 },
            { name: "Handstand Push up Negatives", muscleGroup: "delts & traps, chest & triceps, core & cardio, shoulders, triceps, core, cardio", label: "2, 4, 5, 6", equipment: "Wall", sets: 3, reps: 5, rest: 75, timePerSet: 60 },
        ],
        dumbbells: [
            { name: "Dumbbell Complex Circuit (multiple exercises back-to-back)", muscleGroup: "legs & back, chest & triceps, delts & traps, back & biceps, core & cardio, full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Dumbbells", sets: 4, reps: "8-12 per exercise", rest: 75, timePerSet: 90 },
            { name: "Dumbbell Snatch and Overhead Squat Complex", muscleGroup: "legs & back, delts & traps, back & biceps, core & cardio, full body, shoulders, cardio", label: "1, 3, 4, 5", equipment: "Dumbbells", sets: 4, reps: "8 per exercise", rest: 75, timePerSet: 75 },
            { name: "Dumbbell Thruster Ladder (increasing weight or reps)", muscleGroup: "legs & back, delts & traps, chest & triceps, core & cardio, full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 1, reps: "Ladder", rest: 150, timePerSet: 240 },
            { name: "Dumbbell Renegade Row Complex (with push ups or lunges)", muscleGroup: "legs & back, back & biceps, chest & triceps, core & cardio, back, core, cardio", label: "2, 3, 5", equipment: "Dumbbells", sets: 4, reps: "8-10 per exercise", rest: 75, timePerSet: 90 },
            { name: "Dumbbell Turkish Get ups (faster pace)", muscleGroup: "legs & back, delts & traps, back & biceps, chest & triceps, core & cardio, full body, core, cardio", label: "1, 2, 3, 4, 5", equipment: "Dumbbell", sets: 3, reps: "5 per side", rest: 90, timePerSet: 75 },
            { name: "Dumbbell Clean and Jerk", muscleGroup: "legs & back, delts & traps, back & biceps, chest & triceps, core & cardio, full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Dumbbells", sets: 4, reps: 8, rest: 60, timePerSet: 60 },
            { name: "Dumbbell Devil's Press", muscleGroup: "legs & back, delts & traps, back & biceps, chest & triceps, core & cardio, full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Dumbbells", sets: 4, reps: 10, rest: 60, timePerSet: 75 },
        ],
        gym: [
            { name: "HIIT on Treadmill (sprint intervals)", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Treadmill", sets: 6, reps: "30 sec sprint / 30 sec rest", rest: 60, timePerSet: 60 },
            { name: "Rowing Machine Intervals (high intensity)", muscleGroup: "legs & back, delts & traps, back & biceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Rowing Machine", sets: 5, reps: "400m sprint", rest: 75, timePerSet: 90 },
            { name: "Kettlebell Swings (heavy)", muscleGroup: "legs & back, core & cardio, full body, cardio", label: "1, 3, 5", equipment: "Kettlebell", sets: 4, reps: 20, rest: 45, timePerSet: 45 },
            { name: "Assault Bike Intervals (max effort)", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Assault Bike", sets: 6, reps: "20 sec sprint / 40 sec rest", rest: 90, timePerSet: 60 },
            { name: "Ski Erg Intervals (powerful pulls)", muscleGroup: "delts & traps, back & biceps, core & cardio, full body, arms, back, shoulders, cardio", label: "2, 3, 4, 5", equipment: "Ski Erg", sets: 5, reps: "30 sec hard / 30 sec easy", rest: 75, timePerSet: 60 },
            { name: "Sled Push Intervals (moderate to heavy weight)", muscleGroup: "legs & back, core & cardio, legs, core, cardio", label: "1, 3, 5", equipment: "Sled", sets: 4, reps: "40 meters", rest: 90, timePerSet: 60 },
            { name: "Battle Ropes Intervals (complex patterns)", muscleGroup: "delts & traps, back & biceps, core & cardio, shoulders, arms, core, cardio", label: "2, 4, 5", equipment: "Battle Ropes", sets: 4, reps: "45 sec work / 15 sec rest", rest: 60, timePerSet: 60 },
            { name: "Jacob's Ladder Intervals", muscleGroup: "legs & back, delts & traps, back & biceps, chest & triceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Jacob's Ladder", sets: 4, reps: "60 sec hard / 30 sec easy", rest: 75, timePerSet: 120 },
        ],
    },
},
calisthenics: {
        beginner: [
            { name: "Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
            { name: "Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 45 },
            { name: "Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 60, timePerSet: 30 },
            { name: "Incline Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 25 },
            { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
            { name: "Crunches", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
            { name: "Supermans", muscleGroup: "back & biceps", label: "3", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
            { name: "Wall Sit", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: "30 sec", rest: 60, timePerSet: 30 },
            { name: "Knee Push ups", muscleGroup: "chest & triceps", label: "2", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
            { name: "Russian Twists", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
            { name: "Bird Dog", muscleGroup: "core & back", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 60, timePerSet: 30 }, // Multi-label
            { name: "Calf Raises", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 20 },
            { name: "Hip Thrusts", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 60, timePerSet: 25 },
            { name: "Reverse Crunches", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 20 },
            { name: "Bodyweight Rows Inverted Rows", muscleGroup: "back & biceps", label: "3", equipment: "Bar or Table", sets: 3, reps: 8, rest: 60, timePerSet: 40 },
            { name: "Side Plank", muscleGroup: "core & cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: "20 sec", rest: 60, timePerSet: 20 },
            { name: "Donkey Kicks", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
            { name: "Lateral Lunges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
            { name: "Bear Crawls", muscleGroup: "chest & triceps, full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 60, timePerSet: 45 }, // Multi-label
            { name: "Assisted Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Chair", sets: 3, reps: 8, rest: 60, timePerSet: 30 },
            { name: "Band Assisted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Resistance Band", sets: 3, reps: 8, rest: 60, timePerSet: 40 },
            { name: "Band Assisted Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Chair, Resistance Band", sets: 3, reps: 8, rest: 60, timePerSet: 30 },
            { name: "Negative Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar", sets: 3, reps: 5, rest: 60, timePerSet: 30 },
            { name: "Negative Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Chair", sets: 3, reps: 5, rest: 60, timePerSet: 30 },
            { name: "Incline Rows Assisted", muscleGroup: "back & biceps", label: "3", equipment: "Table or Low Bar", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
            { name: "Elevated Pike Push ups Assisted", muscleGroup: "delts & traps", label: "4", equipment: "Elevated Surface", sets: 3, reps: 8, rest: 60, timePerSet: 40 },
            { name: "Wall Assisted Handstand Holds", muscleGroup: "delts & traps, core", label: "4, 5", equipment: "Wall", sets: 3, reps: "15 sec", rest: 60, timePerSet: 15 }, // Multi-label
            { name: "Band Assisted Squats", muscleGroup: "legs & back", label: "1", equipment: "Resistance Band", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
        ],
      intermediate: [
            { name: "Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar", sets: 3, reps: 8, rest: 90, timePerSet: 40 },
            { name: "Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
            { name: "Pistol Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 6, rest: 90, timePerSet: 60 },
            { name: "Handstand Practice", muscleGroup: "delts & traps, core", label: "4, 5", equipment: "Bodyweight, Wall (optional)", sets: 3, reps: "30 sec", rest: 90, timePerSet: 30 }, // Multi-label
            { name: "Archer Push ups", muscleGroup: "chest & triceps, shoulders", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 6, rest: 90, timePerSet: 45 }, // Multi-label
            { name: "Australian Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Low Bar or Table", sets: 3, reps: 12, rest: 60, timePerSet: 40 },
            { name: "L-Sit Holds", muscleGroup: "core, delts & traps, triceps", label: "2, 4, 5", equipment: "Parallel Bars or Floor", sets: 3, reps: "20 sec", rest: 90, timePerSet: 20 }, // Multi-label
            { name: "Elevated Pike Push ups", muscleGroup: "delts & traps, triceps", label: "4", equipment: "Elevated Surface", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
            { name: "Jump Squats", muscleGroup: "legs & back, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 10, rest: 60, timePerSet: 30 }, // Multi-label
            { name: "Close Grip Push ups", muscleGroup: "chest & triceps, shoulders", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 12, rest: 60, timePerSet: 30 }, // Multi-label
            { name: "Weighted Dips Light", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars, Weight (optional)", sets: 3, reps: 6, rest: 90, timePerSet: 40 },
            { name: "Pull ups Weighted", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
            { name: "Dips Weighted", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 45 },
            { name: "Push ups Plyometric", muscleGroup: "chest & triceps, shoulders, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 8, rest: 120, timePerSet: 30 }, // Multi-label
            { name: "Pistol Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Handstand Push ups Assisted", muscleGroup: "delts & traps, triceps, core", label: "2, 4, 5", equipment: "Wall", sets: 3, reps: 5, rest: 180, timePerSet: 60 }, // Multi-label
            { name: "Front Lever Holds Progression", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Pull-up Bar", sets: 3, reps: "10 sec", rest: 180, timePerSet: 10 }, // Multi-label
            { name: "Back Lever Holds Progression", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Pull-up Bar or Rings", sets: 3, reps: "10 sec", rest: 180, timePerSet: 10 }, // Multi-label
            { name: "Muscle ups Progression", muscleGroup: "back & biceps, chest & triceps, shoulders, core", label: "2, 3, 4, 5", equipment: "Pull-up Bar or Rings", sets: 3, reps: 3, rest: 180, timePerSet: 90 }, // Multi-label
            { name: "One Arm Push up Progression", muscleGroup: "chest & triceps, shoulders, core", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 3, rest: 120, timePerSet: 45 }, // Multi-label
            { name: "Dragon Flags Progression", muscleGroup: "core & cardio, legs (isometric)", label: "1, 5", equipment: "Bench or Stable Surface", sets: 3, reps: 8, rest: 120, timePerSet: 45 }, // Multi-label
        ],
        advanced: [
            { name: "Front Lever", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Pull-up Bar or Rings", sets: 3, reps: "15 sec", rest: 120, timePerSet: 15 }, // Multi-label
            { name: "One Arm Pull ups", muscleGroup: "back & biceps, core", label: "3", equipment: "Pull-up Bar or Rings", sets: 3, reps: 3, rest: 120, timePerSet: 60 },
            { name: "Planche", muscleGroup: "delts & traps, chest & triceps, core", label: "2, 4, 5", equipment: "Parallel Bars or Floor", sets: 3, reps: "10 sec", rest: 120, timePerSet: 10 }, // Multi-label
            { name: "One Arm Handstand Push ups", muscleGroup: "delts & traps, triceps, core", label: "2, 4, 5", equipment: "Wall (optional)", sets: 3, reps: 3, rest: 120, timePerSet: 90 }, // Multi-label
            { name: "Victorian Cross", muscleGroup: "delts & traps, chest, biceps, core", label: "2, 3, 4, 5", equipment: "Rings", sets: 3, reps: "5 sec", rest: 180, timePerSet: 5 }, // Multi-label
            { name: "Human Flag", muscleGroup: "delts & traps, core, obliques", label: "4, 5", equipment: "Vertical Bar", sets: 3, reps: "5 sec", rest: 180, timePerSet: 5 }, // Multi-label
            { name: "90 Degree Push ups", muscleGroup: "chest & triceps, shoulders, core", label: "2, 4, 5", equipment: "Bodyweight", sets: 3, reps: 5, rest: 120, timePerSet: 45 }, // Multi-label
            { name: "Back Lever", muscleGroup: "back & biceps, core & cardio", label: "3, 5", equipment: "Pull-up Bar or Rings", sets: 3, reps: "10 sec", rest: 120, timePerSet: 10 }, // Multi-label
            { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Weight", sets: 4, reps: 5, rest: 120, timePerSet: 60 },
            { name: "Weighted Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars, Weight", sets: 4, reps: 8, rest: 120, timePerSet: 45 },
            { name: "Weighted Pistol Squats", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight, Weight (optional)", sets: 3, reps: 5, rest: 120, timePerSet: 75 },
            { name: "Weighted Archer Pull ups", muscleGroup: "back & biceps, shoulders, core", label: "3, 4", equipment: "Pull-up Bar or Rings, Weight (optional)", sets: 3, reps: 4, rest: 120, timePerSet: 60 }, // Multi-label
            { name: "Weighted Australian Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Low Bar or Table, Weight (optional)", sets: 3, reps: 10, rest: 90, timePerSet: 45 },
            { name: "Weighted L Sit Holds", muscleGroup: "core, delts & traps, triceps", label: "2, 4, 5", equipment: "Parallel Bars or Floor, Weight (optional)", sets: 3, reps: "15 sec", rest: 120, timePerSet: 15 }, // Multi-label
            { name: "Weighted Pike Push ups", muscleGroup: "delts & traps, triceps", label: "4", equipment: "Elevated Surface, Weight (optional)", sets: 3, reps: 6, rest: 120, timePerSet: 45 },
            { name: "Weighted Close Grip Push ups", muscleGroup: "chest & triceps, shoulders", label: "2, 4", equipment: "Bodyweight, Weight (optional)", sets: 3, reps: 10, rest: 90, timePerSet: 30 }, // Multi-label
            { name: "Weighted Back Lever Pulls", muscleGroup: "back & biceps, core", label: "3, 5", equipment: "Pull-up Bar or Rings, Weight (optional)", sets: 3, reps: 5, rest: 120, timePerSet: 60 }, // Multi-label
        ],
    },
  powerlifting_5x5: {
        beginner: [
            { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 60 },
            { name: "Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
            { name: "Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
            { name: "Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Incline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Pendlay Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 60 },
            { name: "Arnold Press", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 120, timePerSet: 50 },
            { name: "Good Mornings", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 45 },
            { name: "Paused Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 90 },
            { name: "Decline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
            { name: "Chest Supported Rows", muscleGroup: "back & biceps", label: "3", equipment: "Bench, Dumbbells or Barbell", sets: 5, reps: 5, rest: 180, timePerSet: 60 },
            { name: "Lateral Raises", muscleGroup: "delts & traps", label: "4", equipment: "Dumbbells", sets: 3, reps: 10, rest: 120, timePerSet: 30 },
            { name: "Glute Bridges", muscleGroup: "legs & back", label: "1", equipment: "Bodyweight", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
        ],
     intermediate: [
            { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
            { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
            { name: "Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 75 }, // Multi-label
            { name: "Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 60 },
            { name: "Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Incline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Pendlay Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
            { name: "Push Press", muscleGroup: "delts & traps, triceps", label: "2, 4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 60 }, // Multi-label
            { name: "Sumo Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 75 }, // Multi-label
            { name: "Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 45 },
            { name: "Paused Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Decline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Chest Supported Rows", muscleGroup: "back & biceps", label: "3", equipment: "Bench, Dumbbells or Barbell", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
            { name: "Behind the Neck Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
            { name: "Snatch Grip Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 75 }, // Multi-label
            { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 75 },
        ],
        advanced: [
            { name: "Barbell Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Barbell Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Barbell Overhead Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 90 }, // Multi-label
            { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 90 },
            { name: "Weighted Dips", muscleGroup: "chest & triceps", label: "2", equipment: "Dip Bar or Parallel Bars, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
            { name: "Front Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Incline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Pendlay Rows", muscleGroup: "back & biceps", label: "3", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Push Press", muscleGroup: "delts & traps, triceps", label: "2, 4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 75 }, // Multi-label
            { name: "Sumo Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 90 }, // Multi-label
            { name: "Romanian Deadlifts", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 75 },
            { name: "Muscle Ups", muscleGroup: "back & biceps, chest & triceps, shoulders, core", label: "2, 3, 4, 5", equipment: "Pull-up Bar or Rings", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 75 }, // Multi-label
            { name: "Paused Squats", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 120 },
            { name: "Decline Barbell Bench Press", muscleGroup: "chest & triceps", label: "2", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
            { name: "Chest Supported Rows", muscleGroup: "back & biceps", label: "3", equipment: "Bench, Dumbbells or Barbell", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Behind the Neck Press", muscleGroup: "delts & traps", label: "4", equipment: "Barbells", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
            { name: "Snatch Grip Deadlifts", muscleGroup: "legs & back", label: "1, 3", equipment: "Barbells", sets: 1, reps: 5, rest: 240, timePerSet: 90 }, // Multi-label
            { name: "Good Mornings", muscleGroup: "legs & back", label: "1", equipment: "Barbells", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
            { name: "Weighted Pull ups", muscleGroup: "back & biceps", label: "3", equipment: "Pull-up Bar, Weight", sets: 3, reps: 5, rest: 180, timePerSet: 90 },
        ],
    },
hiit: {
    beginner: [
        { name: "Jumping Jacks", muscleGroup: "core & cardio, cardio", label: "5", equipment: "Bodyweight", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "High Knees", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Butt Kicks", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Mountain Climbers", muscleGroup: "core & cardio, delts & traps, core, shoulders, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 5, reps: "20 sec", rest: 40, timePerSet: 20 },
        { name: "Squats", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 5, reps: "20 sec", rest: 40, timePerSet: 20 },
        { name: "Push ups on Knees", muscleGroup: "chest & triceps, core & cardio, chest, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 5, reps: "20 sec", rest: 40, timePerSet: 20 },
        { name: "Plank Jacks", muscleGroup: "core & cardio, core, cardio", label: "2, 5", equipment: "Bodyweight", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Walking Lunges", muscleGroup: "legs & back, core & cardio, legs, glutes, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 4, reps: "20 sec per leg", rest: 40, timePerSet: 40 },
        { name: "Shadow Boxing", muscleGroup: "delts & traps, back & biceps, core & cardio, shoulders, arms, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 4, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Step Ups (Low Step)", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 5", equipment: "Optional Step", sets: 4, reps: "20 sec per leg", rest: 30, timePerSet: 40 },
    ],
    intermediate: [
        { name: "Burpees", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Mountain Climbers", muscleGroup: "core & cardio, delts & traps, core, shoulders, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Jump Squats", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Push ups", muscleGroup: "chest & triceps, delts & traps, core & cardio, chest, triceps, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "High Knees", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Plank Jacks", muscleGroup: "core & cardio, core, cardio", label: "2, 5", equipment: "Bodyweight", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Box Jumps (Low Box)", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 5", equipment: "Box", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Walking Lunges with Twist", muscleGroup: "legs & back, core & cardio, legs, glutes, core, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 5, reps: "30 sec per leg", rest: 30, timePerSet: 60 },
        { name: "Dumbbell Thrusters (Light)", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Kettlebell Swings (Light)", muscleGroup: "legs & back, core & cardio, full body, cardio", label: "1, 3, 5", equipment: "Kettlebell", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Sprawls", muscleGroup: "legs & back, chest & triceps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 5, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Lateral Skaters", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 5", equipment: "Bodyweight", sets: 5, reps: "30 sec per side", rest: 30, timePerSet: 60 },
    ],
    advanced: [
        { name: "Burpees", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Bodyweight", sets: 8, reps: "40 sec", rest: 20, timePerSet: 40 },
        { name: "Box Jumps", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 5", equipment: "Box", sets: 8, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Thrusters", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 4, 5", equipment: "Dumbbells or Barbell", sets: 8, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Sprints on the Spot (Fast)", muscleGroup: "legs & back, core & cardio, cardio, legs", label: "1, 5", equipment: "Bodyweight", sets: 8, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Pull ups", muscleGroup: "legs & back, back & biceps, core & cardio, cardio", label: "3, 4, 5, 6", equipment: "Pull-up Bar", sets: 8, reps: "20 sec", rest: 40, timePerSet: 20 },
        { name: "Dips", muscleGroup: "chest & triceps, delts & traps, core & cardio, cardio", label: "2, 4, 5", equipment: "Dip Bar or Parallel Bars", sets: 8, reps: "20 sec", rest: 40, timePerSet: 20 },
        { name: "Devil's Press", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Dumbbells", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Kettlebell Snatches", muscleGroup: "legs & back, delts & traps, back & biceps, core & cardio, full body, cardio", label: "1, 3, 4, 5", equipment: "Kettlebell", sets: 6, reps: "30 sec per arm", rest: 30, timePerSet: 60 },
        { name: "Battle Rope Waves", muscleGroup: "delts & traps, back & biceps, core & cardio, shoulders, arms, core, cardio", label: "2, 4, 5", equipment: "Battle Ropes", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Rowing Sprints", muscleGroup: "legs & back, back & biceps, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Rowing Machine", sets: 6, reps: "30 sec", rest: 30, timePerSet: 30 },
        { name: "Bike Sprints (Assault Bike)", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 5", equipment: "Assault Bike", sets: 6, reps: "20 sec", rest: 40, timePerSet: 20 },
        { name: "Handstand Push-ups (or progressions)", muscleGroup: "chest & triceps, delts & traps, core & cardio, shoulders, triceps, core, cardio", label: "2, 4, 5, 6", equipment: "Bodyweight (Wall)", sets: 5, reps: "20 sec", rest: 45, timePerSet: 20 },
    ],
},
circuit: {
    beginner: [
        { name: "Squats", muscleGroup: "legs & back, legs", label: "1, 3", equipment: "Bodyweight", sets: 3, reps: 10, rest: 10, timePerSet: 30 },
        { name: "Push ups (on knees or full)", muscleGroup: "chest & triceps, chest, triceps", label: "2, 4", equipment: "Bodyweight", sets: 3, reps: 8, rest: 10, timePerSet: 25 },
        { name: "Lunges (alternating legs)", muscleGroup: "legs & back, legs, glutes", label: "1, 3", equipment: "Bodyweight", sets: 3, reps: 10, rest: 10, timePerSet: 45 },
        { name: "Plank", muscleGroup: "core & cardio, core", label: "2", equipment: "Bodyweight", sets: 3, reps: "30 sec hold", rest: 10, timePerSet: 30 },
        { name: "Jumping Jacks", muscleGroup: "core & cardio, cardio", label: "5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 10, timePerSet: 20 },
        { name: "Crunches", muscleGroup: "core & cardio, core", label: "2", equipment: "Bodyweight", sets: 3, reps: 15, rest: 10, timePerSet: 20 },
        { name: "Glute Bridges", muscleGroup: "legs & back, glutes, hamstrings", label: "3", equipment: "Bodyweight", sets: 3, reps: 12, rest: 10, timePerSet: 30 },
        { name: "Bird Dog", muscleGroup: "legs & back, core & cardio, core, back", label: "2, 3", equipment: "Bodyweight", sets: 3, reps: 10, rest: 10, timePerSet: 30 },
        { name: "Step Ups (on a sturdy box or step)", muscleGroup: "legs & back, legs, glutes", label: "1, 3", equipment: "Step", sets: 3, reps: 10, rest: 10, timePerSet: 30 },
        { name: "Arm Circles", muscleGroup: "delts & traps, shoulders", label: "4", equipment: "Bodyweight", sets: 3, reps: 15, rest: 10, timePerSet: 20 },
    ],
    intermediate: [
        { name: "Burpees", muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio, full body, cardio", label: "1, 2, 3, 4, 5", equipment: "Bodyweight", sets: 4, reps: 10, rest: 10, timePerSet: 45 },
        { name: "Pull ups (assisted if needed)", muscleGroup: "legs & back, back & biceps, back, biceps", label: "3, 4", equipment: "Pull-up Bar", sets: 4, reps: 5, rest: 10, timePerSet: 30 },
        { name: "Dips (assisted if needed)", muscleGroup: "chest & triceps, delts & traps, chest, triceps", label: "2, 4", equipment: "Dip Bar or Parallel Bars", sets: 4, reps: 8, rest: 10, timePerSet: 30 },
        { name: "Jump Squats", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 3, 5", equipment: "Bodyweight", sets: 4, reps: 12, rest: 10, timePerSet: 30 },
        { name: "Mountain Climbers", muscleGroup: "core & cardio, delts & traps, core, shoulders, cardio", label: "2, 4, 5", equipment: "Bodyweight", sets: 4, reps: 20, rest: 10, timePerSet: 20 },
        { name: "Kettlebell Swings", muscleGroup: "legs & back, core & cardio, full body, cardio", label: "1, 3, 5", equipment: "Kettlebell", sets: 4, reps: 15, rest: 10, timePerSet: 30 },
        { name: "Walking Lunges with Overhead Reach", muscleGroup: "legs & back, core & cardio, delts & traps, legs, glutes, core, shoulders", label: "1, 2, 3, 4", equipment: "Bodyweight", sets: 4, reps: 10, rest: 10, timePerSet: 50 },
        { name: "Renegade Rows (light dumbbells)", muscleGroup: "legs & back, back & biceps, core & cardio, back, core, biceps", label: "2, 3, 4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 10, timePerSet: 40 },
        { name: "Box Jumps (low box)", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 5", equipment: "Box", sets: 3, reps: 8, rest: 10, timePerSet: 30 },
        { name: "Russian Twists (with or without weight)", muscleGroup: "core & cardio, core", label: "2", equipment: "Bodyweight or Dumbbell", sets: 3, reps: 15, rest: 10, timePerSet: 30 },
        { name: "Thrusters (light dumbbells)", muscleGroup: "legs & back, chest & triceps, delts & traps, full body", label: "1, 2, 4", equipment: "Dumbbells", sets: 3, reps: 8, rest: 10, timePerSet: 40 },
        { name: "High Knees Sprint in Place", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 5", equipment: "Bodyweight", sets: 3, reps: 20, rest: 10, timePerSet: 20 },
    ],
advanced: [
        { name: "Muscle Ups", muscleGroup: "legs & back, back & biceps, chest & triceps, delts & traps, core & cardio, shoulders, core", label: "2, 3, 4", equipment: "Pull-up Bar or Rings", sets: 5, reps: 3, rest: 10, timePerSet: 60 },
        { name: "Pistol Squats (alternating legs)", muscleGroup: "legs & back, core & cardio, legs, glutes, core", label: "1, 3", equipment: "Bodyweight", sets: 3, reps: 5, rest: 10, timePerSet: 60 },
        { name: "Handstand Push ups (freestanding or against wall)", muscleGroup: "chest & triceps, delts & traps, core & cardio, shoulders, triceps, core", label: "2, 4", equipment: "Wall (optional)", sets: 3, reps: 3, rest: 10, timePerSet: 60 },
        { name: "Box Jumps (high box)", muscleGroup: "legs & back, core & cardio, legs, cardio", label: "1, 5", equipment: "Box", sets: 4, reps: 10, rest: 10, timePerSet: 30 },
        { name: "Thrusters (barbell or heavier dumbbells)", muscleGroup: "legs & back, chest & triceps, delts & traps, full body", label: "1, 2, 4", equipment: "Barbell or Dumbbells", sets: 4, reps: 8, rest: 10, timePerSet: 45 },
        { name: "Barbell Complexes (multiple exercises in one set)", muscleGroup: "legs & back, chest & triceps, back & biceps, delts & traps, full body", label: "1, 2, 3, 4", equipment: "Barbell", sets: 3, reps: 5, rest: 10, timePerSet: 90 },
        { name: "Kettlebell Snatches (alternating arms)", muscleGroup: "legs & back, delts & traps, core & cardio, full body", label: "1, 3, 4", equipment: "Kettlebell", sets: 3, reps: 6, rest: 10, timePerSet: 40 },
        { name: "Pull ups (strict or kipping)", muscleGroup: "legs & back, back & biceps, back, biceps", label: "3, 4", equipment: "Pull-up Bar", sets: 4, reps: 8, rest: 10, timePerSet: 30 },
        { name: "Dips (weighted if possible)", muscleGroup: "chest & triceps, delts & traps, chest, triceps", label: "2, 4", equipment: "Dip Bar or Parallel Bars, Weight Belt (optional)", sets: 4, reps: 10, rest: 10, timePerSet: 30 },
        { name: "Medicine Ball Slams", muscleGroup: "core & cardio, delts & traps, shoulders, arms", label: "2, 4", equipment: "Medicine Ball", sets: 3, reps: 10, rest: 10, timePerSet: 30 },
        { name: "Battle Ropes (various patterns)", muscleGroup: "delts & traps, back & biceps, core & cardio, shoulders, arms, core, cardio", label: "2, 4, 5", equipment: "Battle Ropes", sets: 3, reps: 30, rest: 10, timePerSet: 30 },
        { name: "Sled Pushes (light to moderate weight)", muscleGroup: "legs & back, delts & traps, core & cardio, legs, core, shoulders", label: "1, 2, 3", equipment: "Sled", sets: 3, reps: "20 meters", rest: 10, timePerSet: 45 }
    ],
   },
hybrid_calisthenics_plus: {
    "beginner": [
        { name: "Lunges (bodyweight only)", sets: 3, reps: "8-12 each leg", rest: 60, equipment: "weighted vest and resistance bands", muscleGroup: "legs & back, lower back, glutes", timePerSet: 45, label: "3, 5" },
        { name: "Supermans", sets: 3, reps: "10 sec hold", rest: 60, equipment: "none", muscleGroup: "core & cardio, lower back, glutes", timePerSet: 45, label: "3" },
         { name: "Pull-ups (bodyweight, leave some in the tank)", sets: 3, reps: "6-10", rest: 60, equipment: "Pull-up bar", muscleGroup: "back & biceps, biceps, forearms", timePerSet: 45, label: "3" },
        { name: "Diomond Push-ups (Bodyweight only)", sets: 3, reps: "8", rest: 45, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
        { name: "Wide Grip Push-ups (Bodyweight only)", sets: 3, reps: "8", rest: 45, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
        { name: "Military Push-ups (Bodyweight only)", sets: 3, reps: "8", rest: 45, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
        { name: "Standing Resistance Shoulder Raises (light)", sets: 3, reps: 12, rest: 45, equipment: "Resistance Bands With Handles", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Single Arm Resistance Band Arnold-press (light)", sets: 3, reps: "12 each side", rest: 45, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Suspention Trainer Pike Push-ups (Hands Elevated)", sets: 3, reps: 12, rest: 45, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Standing Resistance-Band Military Press", sets: 3, reps: 12, rest: 45, equipment: "Resistance-bands with handles", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Incline Pike Push-ups (hands elevated)", sets: 3, reps: 8, rest: 45, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Over Head Single Arm Band Press", sets: 3, reps: "12 each side", rest: 45, equipment: "One Pull-up Band", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Single Arm Band Shoulder Raises", sets: 3, reps: "12 each side", rest: 45, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Standing Resistance Shoulder Raises (light)", sets: 3, reps: 12, rest: 45, equipment: "Resistance Bands With Handles", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Single Arm Resistance Band Arnold-press (light)", sets: 3, reps: "12 each side", rest: 45, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Suspention Trainer Pike Push-ups (Hands Elevated)", sets: 3, reps: 10, rest: 45, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Standing Resistance-Band Military Press", sets: 3, reps: 12, rest: 45, equipment: "Resistance-bands with handles", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Incline Pike Push-ups (Hands elevated)", sets: 3, reps: 10, rest: 45, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Over Head Single Arm Band Press", sets: 3, reps: "12 per side", rest: 45, equipment: "One Pull-up Band", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
        { name: "Bodyweight Squats", sets: 3, reps: 12, rest: 45, equipment: "none", label: "1", timePerSet: 30, muscleGroup: "legs & back, legs, glutes" },
        { name: "Resistance Band Pull-aparts", sets: 3, reps: 15, rest: 30, equipment: "resistance band", muscleGroup: "delts & traps, shoulders, upper back", timePerSet: 20, label: "4" },
        { name: "Incline Push-ups (hands elevated)", sets: 3, reps: 10, rest: 45, equipment: "bench or elevated surface", muscleGroup: "chest & triceps, chest, shoulders, triceps", timePerSet: 30, label: "2" },
        { name: "Resistance Band Rows (seated or standing)", sets: 3, reps: 12, rest: 45, equipment: "resistance band", muscleGroup: "legs & back, back & biceps, back, biceps", timePerSet: 30, label: "1, 3" },
        { name: "Glute Bridges", sets: 3, reps: 15, rest: 30, equipment: "none", muscleGroup: "legs & back, glutes, hamstrings", timePerSet: 30, label: "1" },
        { name: "Suspension Trainer Assisted Squats", sets: 3, reps: 12, rest: 45, equipment: "suspension trainer", label: "1", timePerSet: 30, muscleGroup: "legs & back, legs, glutes" },
        { name: "Resistance Band Bicep Curls (light resistance)", sets: 3, reps: 12, rest: 45, equipment: "resistance band", muscleGroup: "back & biceps, biceps", timePerSet: 30, label: "3" },
        { name: "Resistance Band Tricep Extensions (overhead, light resistance)", sets: 3, reps: 12, rest: 45, equipment: "resistance band", muscleGroup: "chest & triceps, triceps", timePerSet: 30, label: "2" },
        { name: "Calf Raises (bodyweight)", sets: 3, reps: 15, rest: 30, equipment: "none", muscleGroup: "legs & back, calves", timePerSet: 20, label: "1" },
        { name: "Plank (on forearms)", sets: 3, reps: "30 seconds hold", rest: 45, equipment: "none", label: "5", timePerSet: 30, muscleGroup: "core & cardio, core, shoulders" },
        { name: "Ankle Weight Calf Raises", sets: 3, reps: 15, rest: 45, equipment: "ankle weights", muscleGroup: "legs & back, calves", timePerSet: 20, label: "1" },
        { name: "Resistance Band Lateral Walks (short distance, light band)", sets: 3, reps: "8 steps each way", rest: 45, equipment: "resistance band", label: "1", timePerSet: 30, muscleGroup: "legs & back, glutes, outer thighs" },
        { name: "Suspension Trainer Pull-ups (feet on ground, high angle)", sets: 3, reps: 6, rest: 60, equipment: "suspension trainer", muscleGroup: "legs & back, back & biceps, back, biceps", timePerSet: 45, label: "1, 3" },
        { name: "Weighted Vest Squats", sets: 3, reps: 10, rest: 60, equipment: "weighted vest", label: "1", timePerSet: 30, muscleGroup: "legs & back, legs, glutes" },
        { name: "Resistance Band Assisted Push ups", sets: 3, reps: 10, rest: 60, equipment: "resistance band", muscleGroup: "chest & triceps, chest, shoulders, triceps", timePerSet: 30, label: "2" },
        { name: "Suspension Trainer Rows (higher angle)", sets: 3, reps: 10, rest: 60, equipment: "suspension trainer", muscleGroup: "legs & back, back & biceps, back, biceps", timePerSet: 30, label: "1, 3" },
        { name: "Ankle Weight Lunges", sets: 3, reps: 10, rest: 60, equipment: "ankle weights", label: "1", timePerSet: 30, muscleGroup: "legs & back, legs, glutes" },
        { name: "Resistance Band Glute Bridges", sets: 3, reps: 15, rest: 45, equipment: "resistance band", muscleGroup: "legs & back, glutes, hamstrings", timePerSet: 30, label: "1" },
        { name: "Suspension Trainer Face Pulls (easy angle)", sets: 3, reps: 12, rest: 45, equipment: "suspension trainer", muscleGroup: "delts & traps, shoulders, upper back", timePerSet: 30, label: "4" },
        { name: "Weighted Vest Calf Raises", sets: 3, reps: 15, rest: 45, equipment: "weighted vest", muscleGroup: "legs & back, calves", timePerSet: 20, label: "1" },
        { name: "Resistance Band Lateral Walks", sets: 3, reps: 10, rest: 45, equipment: "resistance band", label: "1", timePerSet: 30, muscleGroup: "legs & back, glutes, outer thighs" },
        { name: "Suspension Trainer Bicep Curls (easier angle)", sets: 3, reps: 12, rest: 45, equipment: "suspension trainer", muscleGroup: "back & biceps, biceps", timePerSet: 30, label: "3" },
        { name: "Ankle Weight Flutter Kicks", sets: 3, reps: 20, rest: 30, equipment: "ankle weights", label: "5", timePerSet: 30, muscleGroup: "core & cardio, core, hip flexors" },
        { name: "Suspension Trainer Atomic Push-ups (knees)", sets: 3, reps: 8, rest: 60, equipment: "suspension trainer", muscleGroup: "chest & triceps, delts & traps, core & cardio, chest, shoulders, triceps, core", timePerSet: 45, label: "2, 4, 5" },
        { name: "Towel Pull-ups (assisted, feet on ground)", sets: 3, reps: 6, rest: 60, equipment: "towel, pull-up bar", muscleGroup: "back & biceps, back, biceps", timePerSet: 45, label: "1, 3" },
        { name: "Suspension Trainer Knee Tucks", sets: 3, reps: 15, rest: 45, equipment: "suspension trainer", label: "5", timePerSet: 30, muscleGroup: "core & cardio, core, hip flexors" },
        { name: "Towel Curls (Suspension Trainer, beginner angle)", sets: 3, reps: 12, rest: 45, equipment: "towel, suspension trainer", muscleGroup: "back & biceps, biceps", timePerSet: 30, label: "3" },
        { name: "Resistance Band Good Mornings (light resistance)", sets: 3, reps: 15, rest: 45, equipment: "resistance band", muscleGroup: "legs & back, hamstrings, glutes, lower back", timePerSet: 30, label: "1" },
        { name: "Suspension Trainer Tricep Extensions (easier angle)", sets: 3, reps: 12, rest: 45, equipment: "suspension trainer", muscleGroup: "chest & triceps, triceps", timePerSet: 30, label: "2" },
        { name: "Side Plank (on forearm)", sets: 3, reps: "30 seconds hold each side", rest: 45, equipment: "none", label: "5", timePerSet: 30, muscleGroup: "core & cardio, core, obliques, shoulders" }
    ],
"intermediate": [
    { name: "Weighted Vest Lunges", sets: 3, reps: "8-12 each leg", rest: 60, equipment: "weighted vest", muscleGroup: "legs & back, lower back, glutes", timePerSet: 45, label: "3, 5" },
    { name: "Supermans", sets: 4, reps: "15 sec hold", rest: 60, equipment: "none", muscleGroup: "core & cardio, lower back, glutes", timePerSet: 45, label: "3" },
    { name: "Pull-ups (bodyweight, near faliure)", sets: 3, reps: "6-10", rest: 60, equipment: "pull-up bar", muscleGroup: "back & biceps, biceps, forearms", timePerSet: 45, label: "3" },
    { name: "Diomond Push-ups (Weighted, moderate)", sets: 3, reps: "8", rest: 60, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
    { name: "Wide Grip Push-ups (Weighted, moderate)", sets: 3, reps: "8", rest: 60, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
    { name: "Military Push-ups (Weighted, moderate)", sets: 3, reps: "8", rest: 60, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
    { name: "Planche Push-ups (Weighted, optional)", sets: 3, reps: "8", rest: 90, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
    { name: "Wide Grip Push-ups (Weighted, heavy)", sets: 3, reps: "8", rest: 60, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, delts & traps, shoulders, triceps" },
    { name: "Military Push-ups (Weighted, heavy)", sets: 3, reps: "8", rest: 60, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
    { name: "Single Arm Band Shoulder Raises", sets: 3, reps: "12 each side", rest: 60, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Standing Resistance Shoulder Raises (light)", sets: 3, reps: 12, rest: 60, equipment: "Resistance Bands With Handles", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Single Arm Resistance Band Arnold-press (light)", sets: 3, reps: "12 each side", rest: 60, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Suspention Trainer Pike Push-ups (Hands Elevated)", sets: 3, reps: 12, rest: 90, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Standing Resistance-Band Military Press", sets: 3, reps: 12, rest: 60, equipment: "Resistance-bands with handles", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Incline Pike Push-ups (hands elevated)", sets: 3, reps: 8, rest: 60, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Over Head Single Arm Band Press", sets: 3, reps: "12 each side", rest: 60, equipment: "One Pull-up Band", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Single Arm Band Shoulder Raises (Moderate)", sets: 3, reps: "10 each side", rest: 60, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Standing Resistance Shoulder Raises (Moderate)", sets: 3, reps: 10, rest: 60, equipment: "Resistance Bands With Handles", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Single Arm Resistance Band Arnold-press (Moderate)", sets: 3, reps: "10 per side", rest: 60, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Suspention Trainer Pike Push-ups (Feet elevated)", sets: 3, reps: 8, rest: 60, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Standing Resistance-Band Military Press", sets: 3, reps: 10, rest: 60, equipment: "Resistance-bands with handles", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Incline Pike Push-ups (Feet elevated)", sets: 3, reps: 8, rest: 60, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Over Head Single Arm Band Press", sets: 3, reps: "12 per side", rest: 60, equipment: "One Pull-up Band", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Weighted Vest Pull ups", sets: 3, reps: "as many as possible", rest: 75, equipment: "weighted vest", muscleGroup: "legs & back, back & biceps, back, biceps, lats", timePerSet: 45, label: "1, 3" },
    { name: "Resistance Band Push-ups", sets: 3, reps: 12, rest: 60, equipment: "resistance band", muscleGroup: "chest & triceps, delts & traps, chest, shoulders, triceps", timePerSet: 30, label: "2, 4" },
    { name: "Suspension Trainer Inverted Rows (feet elevated)", sets: 3, reps: 12, rest: 60, equipment: "suspension trainer, elevated surface", muscleGroup: "legs & back, back & biceps, back, biceps", timePerSet: 30, label: "1, 3" },
    { name: "Wrist Weight Dips", sets: 3, reps: 8, rest: 75, equipment: "wrist weights", muscleGroup: "chest & triceps, delts & traps, triceps, chest, shoulders", timePerSet: 45, label: "2, 4" },
    { name: "Weighted Vest Step-ups", sets: 3, reps: "10 each leg", rest: 60, equipment: "weighted vest, box or step", label: "1", timePerSet: 45, muscleGroup: "legs & back, legs, glutes" },
    { name: "Resistance Band Good Mornings", sets: 3, reps: 15, rest: 60, equipment: "resistance band", muscleGroup: "legs & back, hamstrings, glutes, lower back", timePerSet: 30, label: "1" },
    { name: "Suspension Trainer Tricep Extensions (overhead)", sets: 3, reps: 12, rest: 60, equipment: "suspension trainer", muscleGroup: "chest & triceps, triceps", timePerSet: 30, label: "2" },
    { name: "Ankle Weight Russian Twists", sets: 3, reps: "15 each side", rest: 45, equipment: "ankle weights", label: "5", timePerSet: 30, muscleGroup: "core & cardio, core, obliques" },
    { name: "Weighted Vest Glute Bridges", sets: 3, reps: 15, rest: 60, equipment: "weighted vest", muscleGroup: "legs & back, glutes, hamstrings", timePerSet: 30, label: "1" },
    { name: "Resistance Band Face Pulls", sets: 3, reps: 15, rest: 60, equipment: "resistance band", muscleGroup: "delts & traps, shoulders, upper back", timePerSet: 30, label: "4" },
    { name: "Suspension Trainer Chest Press (steeper angle)", sets: 3, reps: 10, rest: 60, equipment: "suspension trainer", muscleGroup: "chest & triceps, delts & traps, chest, shoulders, triceps", timePerSet: 30, label: "2, 4" },
    { name: "Towel Pull-ups", sets: 3, reps: "as many as possible", rest: 75, equipment: "towel, pull-up bar", muscleGroup: "legs & back, back & biceps, back, biceps, forearms", timePerSet: 45, label: "1, 3" },
    { name: "Suspension Trainer Mountain Climbers", sets: 3, reps: "20 each leg", rest: 45, equipment: "suspension trainer", label: "5", timePerSet: 30, muscleGroup: "core & cardio, core, shoulders, legs" },
    { name: "Towel Curls (Suspension Trainer, moderate angle)", sets: 3, reps: 10, rest: 45, equipment: "towel, suspension trainer", muscleGroup: "back & biceps, biceps, forearms", timePerSet: 30, label: "3" },
    { name: "Suspension Trainer Lunges (single leg focus)", sets: 3, reps: "10 each leg", rest: 60, equipment: "suspension trainer", label: "1", timePerSet: 30, muscleGroup: "legs & back, legs, glutes, balance" },
    { name: "Weighted Vest Dips (on parallel bars)", sets: 3, reps: 8, rest: 75, equipment: "weighted vest, parallel bars", muscleGroup: "chest & triceps, delts & traps, triceps, chest, shoulders", timePerSet: 45, label: "2, 4" },
    { name: "Resistance Band Squats", sets: 3, reps: 12, rest: 45, equipment: "resistance band", label: "1", timePerSet: 30, muscleGroup: "legs & back, legs, glutes" },
    { name: "Suspension Trainer Pike Push-ups (knees tucked)", sets: 3, reps: 8, rest: 75, equipment: "suspension trainer", muscleGroup: " delts & traps, shoulders, triceps, upper chest", timePerSet: 45, label: "4" },
    { name: "Ankle Weight Leg Raises (lying)", sets: 3, reps: 12, rest: 45, equipment: "ankle weights", label: "5", timePerSet: 30, muscleGroup: "core & cardio, core, hip flexors" },
    { name: "Resistance Band Rows (single arm)", sets: 3, reps: "10 each arm", rest: 60, equipment: "resistance band", muscleGroup: "legs & back, back & biceps, core & cardio, back, biceps, core", timePerSet: 30, label: "1, 3, 5" },
    { name: "Suspension Trainer Glute Bridges (single leg)", sets: 3, reps: "10 each leg", rest: 60, equipment: "suspension trainer", muscleGroup: "legs & back, core & cardio, glutes, hamstrings, core", timePerSet: 30, label: "1, 5" },
    { name: "Weighted Vest Calf Raises (single leg)", sets: 3, reps: "12 each leg", rest: 45, equipment: "weighted vest", muscleGroup: "legs & back, calves, balance", timePerSet: 30, label: "1" },
    { name: "Resistance Band Lateral Walks (longer distance)", sets: 3, reps: "12 steps each way", rest: 45, equipment: "resistance band", label: "1", timePerSet: 30, muscleGroup: "legs & back, glutes, outer thighs" },
    { name: "Suspension Trainer Bicep Curls (neutral grip)", sets: 3, reps: 10, rest: 45, equipment: "suspension trainer", muscleGroup: "back & biceps, biceps, forearms", timePerSet: 30, label: "3" },
    { name: "Ankle Weight Flutter Kicks (elevated legs)", sets: 3, reps: 20, rest: 30, equipment: "ankle weights", label: "5", timePerSet: 30, muscleGroup: "core & cardio, core, hip flexors" },
    { name: "Suspension Trainer Atomic Push-ups (feet on ground)", sets: 3, reps: 8, rest: 60, equipment: "suspension trainer", muscleGroup: "chest & triceps, delts & traps, core & cardio, chest, shoulders, triceps, core", timePerSet: 45, label: "2, 4, 5" },
    { name: "Towel Pull-ups (narrow grip)", sets: 3, reps: "as many as possible", rest: 75, equipment: "towel, pull-up bar", muscleGroup: "back & biceps, forearms, core", timePerSet: 45, label: "1, 3" },
    { name: "Suspension Trainer Knee Tucks (hanging)", sets: 3, reps: 12, rest: 45, equipment: "suspension trainer, pull-up bar", label: "5", timePerSet: 30, muscleGroup: "core & cardio, core, hip flexors" },
    { name: "Towel Curls (Suspension Trainer, challenging angle)", sets: 3, reps: 8, rest: 45, equipment: "towel, suspension trainer", muscleGroup: "back & biceps, forearms", timePerSet: 30, label: "3" },
    { name: "Resistance Band Good Mornings (moderate resistance)", sets: 3, reps: 12, rest: 60, equipment: "resistance band", muscleGroup: "legs & back, hamstrings, glutes, lower back", timePerSet: 30, label: "1" },
    { name: "Suspension Trainer Tricep Extensions (underhand grip)", sets: 3, reps: 10, rest: 60, equipment: "suspension trainer", muscleGroup: "chest & triceps, triceps", timePerSet: 30, label: "2" },
    { name: "Plank with Resistance Band Pull-aparts", sets: 3, reps: "10 pull-aparts, 45 sec plank hold", rest: 60, equipment: "resistance band", label: "4, 5", timePerSet: 60, muscleGroup: "core & cardio, delts & traps, core, shoulders, upper back" }
],
"advanced": [
    { name: "Weighted Lunges (With Bands)", sets: 3, reps: "8-12 each leg", rest: 60, equipment: "weighted vest and resistance bands", muscleGroup: "legs & back, lower back, glutes", timePerSet: 45, label: "3, 5" },
    { name: "Supermans (With wrist & ankle weights)", sets: 4, reps: "15 sec hold", rest: 60, equipment: "none", muscleGroup: "core & cardio, lower back, glutes", timePerSet: 45, label: "3" },
    { name: "Pull-ups (bodyweight, Till faliure)", sets: 3, reps: "6-10", rest: 60, equipment: "Pull-up bar", muscleGroup: "back & biceps, biceps, forearms", timePerSet: 45, label: "3" },
    { name: "Towel rows (Suspension Trainer, very challenging angle, slow tempo)", sets: 3, reps: "6-10", rest: 90, equipment: "towel, suspension trainer", muscleGroup: "back & biceps, biceps, forearms", timePerSet: 45, label: "3" },
    { name: "Diomond Push-ups (Weighted, heavy)", sets: 3, reps: "8", rest: 75, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
    { name: "Wide Grip Push-ups (Weighted, heavy)", sets: 3, reps: "8", rest: 75, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
    { name: "Military Push-ups (Weighted, heavy)", sets: 3, reps: "8", rest: 75, equipment: "weighted vest", label: "2", timePerSet: 30, muscleGroup: "chest & triceps, triceps" },
    { name: "Single Arm Band Shoulder Raises (Heavy)", sets: 3, reps: "8 each side", rest: 75, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Standing Resistance Shoulder Raises (Heavy)", sets: 3, reps: 8, rest: 75, equipment: "Resistance Bands With Handles", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Single Arm Resistance Band Arnold-press (Heavy)", sets: 3, reps: "8 each side", rest: 75, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Weighted Suspention Trainer Pike Push-ups (Feet elevated)", sets: 3, reps: 5, rest: 75, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Standing Resistance-Band Military Press (Heavy", sets: 3, reps: 8, rest: 75, equipment: "Resistance-bands with handles", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Weighted Decline Pike Push-ups (Feet elevated)", sets: 3, reps: 5, rest: 75, equipment: "none", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Over Head Single Arm Band Press", sets: 3, reps: "12 each side", rest: 75, equipment: "One Pull-up Band", label: "4", timePerSet: 30, muscleGroup: "delts & traps, shoulders, triceps" },
    { name: "Weighted Vest Pistol Squats", sets: 3, reps: "5-8 each leg", rest: 90, equipment: "weighted vest", label: "1, balance", timePerSet: 60, muscleGroup: "legs & back, legs, glutes, core" },
    { name: "Resistance Band Archer Push ups", sets: 3, reps: "6-10 each side", rest: 75, equipment: "resistance band", muscleGroup: "chest & triceps, delts & traps, core & cardio, chest, shoulders, triceps, core", timePerSet: 60, label: "2, 4, 5" },
    { name: "Suspension Trainer Single Arm Rows (challenging angle)", sets: 3, reps: "8-12 each arm", rest: 75, equipment: "suspension trainer", muscleGroup: "legs & back, back & biceps, core & cardio, back, biceps, core", timePerSet: 60, label: "1, 3, 5" },
    { name: "Ankle/Wrist Weight Leg Raises (Hanging, L-sit variation)", sets: 3, reps: "8-10", rest: 75, equipment: "ankle weights, wrist weights, pull-up bar", label: "5", timePerSet: 60, muscleGroup: "core & cardio, core, hip flexors, forearms" },
    { name: "Weighted Vest Dips (slow negatives)", sets: 3, reps: "6-8", rest: 90, equipment: "weighted vest, parallel bars", muscleGroup: "chest & triceps, delts & traps, triceps, chest, shoulders", timePerSet: 60, label: "2, 4" },
    { name: "Resistance Band Pull aparts (super wide grip)", sets: 3, reps: "20-25", rest: 45, equipment: "resistance band", muscleGroup: "delts & traps, shoulders, upper back, rear deltoids", timePerSet: 30, label: "4" },
    { name: "Suspension Trainer Pike Push-ups (elevated feet)", sets: 3, reps: "8-12", rest: 75, equipment: "suspension trainer, elevated surface", muscleGroup: "chest & triceps, delts & traps, core & cardio, shoulders, triceps, upper chest, core", timePerSet: 60, label: "2, 4, 5" },
    { name: "Weighted Vest Nordic Hamstring Curls (full range, controlled)", sets: 3, reps: "4-6", rest: 90, equipment: "weighted vest, secure foot hold", muscleGroup: "legs & back, hamstrings, glutes, lower back", timePerSet: 60, label: "1" },
    { name: "Resistance Band Squat Jumps (explosive, high resistance)", sets: 3, reps: "8-10", rest: 75, equipment: "resistance band", label: "1, explosive", timePerSet: 45, muscleGroup: "legs & back, legs, glutes, calves" },
    { name: "Suspension Trainer Body Saws (extended range)", sets: 3, reps: "12-15", rest: 60, equipment: "suspension trainer", label: "5", timePerSet: 60, muscleGroup: "core & cardio, core, shoulders, lats" },
    { name: "Suspension Trainer Pull-ups (single leg raised)", sets: 3, reps: "as many as possible", rest: 75, equipment: "suspension trainer", muscleGroup: "legs & back, back & biceps, core & cardio, back, biceps, core", timePerSet: 45, label: "1, 3, 5" },
    { name: "Towel Pull-ups (weighted vest, narrow grip)", sets: 3, reps: "as many as possible", rest: 90, equipment: "towel, pull-up bar, weighted vest", muscleGroup: "legs & back, back & biceps, back, biceps, lats, forearms", timePerSet: 60, label: "1, 3" },
    { name: "Suspension Trainer Single Leg Squats (no assistance)", sets: 3, reps: "5-8 each leg", rest: 90, equipment: "suspension trainer (optional for balance)", label: "1, balance", timePerSet: 60, muscleGroup: "legs & back, legs, glutes, core" },
    { name: "Towel Curls (Suspension Trainer, very challenging angle, slow tempo)", sets: 3, reps: "6-10", rest: 60, equipment: "towel, suspension trainer", muscleGroup: "back & biceps, biceps, forearms", timePerSet: 45, label: "3" },
    { name: "Suspension Trainer Tricep Dips (feet elevated)", sets: 3, reps: "10-15", rest: 75, equipment: "suspension trainer, elevated surface", muscleGroup: "chest & triceps, delts & traps, core & cardio", timePerSet: 45, label: "2, 4, 5" },
    { name: "Weighted Vest Burpees", sets: 3, reps: "8-10", rest: 90, equipment: "weighted vest", label: "1, 2, 4, 5", timePerSet: 60, muscleGroup: "legs & back, chest & triceps, delts & traps, core & cardio" },
    { name: "Resistance Band Deadlifts (heavy resistance)", sets: 3, reps: "6-8", rest: 90, equipment: "resistance band", label: "1", timePerSet: 60, muscleGroup: "legs & back, hamstrings, glutes, lower back" },
    { name: "Suspension Trainer Inverted Rows (horizontal)", sets: 3, reps: "10-15", rest: 60, equipment: "suspension trainer", muscleGroup: "legs & back, back & biceps, delts & traps, core & cardio, back, biceps, rear deltoids, core", timePerSet: 45, label: "1, 3, 4, 5" },
    { name: "Ankle/Wrist Weight Reverse Crunches (hanging)", sets: 3, reps: "12-15", rest: 60, equipment: "ankle weights, wrist weights, pull-up bar", label: "5", timePerSet: 45, muscleGroup: "core & cardio, core, lower abs, hip flexors" },
    { name: "Resistance Band Good Mornings (very heavy resistance)", sets: 3, reps: "8-10", rest: 75, equipment: "resistance band", muscleGroup: "legs & back, hamstrings, glutes, lower back", timePerSet: 45, label: "1" },
    { name: "Suspension Trainer Single-Leg Glute Bridges (weighted vest)", sets: 3, reps: "8-10 each leg", rest: 75, equipment: "suspension trainer, weighted vest", muscleGroup: "legs & back, core & cardio, glutes, hamstrings, core", timePerSet: 60, label: "1, 5" },
    { name: "Weighted Vest Pull-ups (slow and controlled)", sets: 3, reps: "5-8", rest: 90, equipment: "weighted vest, pull-up bar", muscleGroup: "legs & back, back & biceps, back, biceps, lats", timePerSet: 60, label: "1, 3" },
    { name: "Resistance Band Push-ups (plyometric)", sets: 3, reps: "8-10", rest: 75, equipment: "resistance band", muscleGroup: "chest & triceps, delts & traps, explosive", timePerSet: 45, label: "2, 4" },
    { name: "Suspension Trainer Atomic Push-ups (feet elevated, full extension)", sets: 3, reps: "8-12", rest: 75, equipment: "suspension trainer, elevated surface", muscleGroup: "chest & triceps, delts & traps, core & cardio, chest, shoulders, triceps, core", timePerSet: 60, label: "2, 4, 5" },
    { name: "Towel Rows (Pull-up Bar, single arm)", sets: 3, reps: "6-10 each arm", rest: 75, equipment: "towel, pull-up bar", muscleGroup: "back & biceps, forearms, core", timePerSet: 60, label: "1, 3, 5" },
    { name: "Suspension Trainer Leg Curls (single leg)", sets: 3, reps: "10-12 each leg", rest: 60, equipment: "suspension trainer", muscleGroup: "legs & back, core & cardio, hamstrings, glutes, core", timePerSet: 45, label: "1, 5" },
    { name: "Weighted Vest Step-ups (high box, single leg)", sets: 3, reps: "6-8 each leg", rest: 90, equipment: "weighted vest, high box", label: "1, balance", timePerSet: 60, muscleGroup: "legs & back, legs, glutes, core" },
    { name: "Resistance Band Face Pulls (with external rotation at the end)", sets: 3, reps: "15-20", rest: 45, equipment: "resistance band", muscleGroup: "delts & traps, shoulders, upper back, rotator cuffs", timePerSet: 30, label: "4" },
    { name: "Suspension Trainer Handstand Push-up Negatives (assisted if needed)", sets: 3, reps: "3-5", rest: 120, equipment: "suspension trainer, wall (optional)", muscleGroup: "chest & triceps, delts & traps, core & cardio, shoulders, triceps, upper chest, core", timePerSet: 90, label: "2, 4, 5" },
    { name: "Towel Curls (Suspension Trainer, single arm)", sets: 3, reps: "8-12 each arm", rest: 60, equipment: "towel, suspension trainer", muscleGroup: "back & biceps, core & cardio, biceps, forearms, core", timePerSet: 45, label: "3, 5" },
]
}
};


/* ............................................... Function: Normalize Exercises ...................................................... */
function normalizeExercises(exercisesArray) {
    if (!Array.isArray(exercisesArray)) {
        // If it's not an array, assume it's already normalized
        return exercisesArray;
    }
    return exercisesArray.map(exercise => {
        return {
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps,
            rest: exercise.rest,
            timePerSet: exercise.timePerSet, 
             muscleGroup: exercise.muscleGroup, 
            label: exercise.label,           
            equipment: exercise.equipment    
        };
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

document.getElementById("generate-workout").addEventListener("click", function () {
    const goal = document.getElementById("goal").value;
    const experience = document.getElementById("experience").value;
    const modality = document.getElementById("modality").value;
    const trainingSplit = document.getElementById("training-split").value; // Get the selected training split
    const resultDiv = document.getElementById("workout-result");
    resultDiv.innerHTML = "";

    let selectedExercises = [];

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
    let numberOfExercises = 5; // Default for beginner

    if (experience === "intermediate") {
        numberOfExercises = 6;
    } else if (experience === "advanced") {
        numberOfExercises = 8;
    }

    if (trainingSplit === "full_body") {
        const labeledExercisesByType = {};
        availableExercises.forEach(exercise => {
            if (exercise.label) {
                const labels = exercise.label.split(',').map(label => label.trim());
                labels.forEach(label => {
                    if (!labeledExercisesByType[label]) {
                        labeledExercisesByType[label] = [];
                    }
                    labeledExercisesByType[label].push(exercise);
                });
            }
        });

        const workoutLabels = new Set();
        while (workout.length < numberOfExercises) {
            const availableLabels = Object.keys(labeledExercisesByType).filter(label => !workoutLabels.has(label) && labeledExercisesByType[label].length > 0);
            if (availableLabels.length > 0) {
                const randomLabel = availableLabels[Math.floor(Math.random() * availableLabels.length)];
                const exercisesForLabel = labeledExercisesByType[randomLabel];
                const randomExerciseIndex = Math.floor(Math.random() * exercisesForLabel.length);
                const selectedExercise = exercisesForLabel[randomExerciseIndex];
                workout.push(selectedExercise);
                workoutLabels.add(randomLabel);
            } else if (availableExercises.length > 0) {
                // If no more unique labels, add a random unique exercise
                const randomIndex = Math.floor(Math.random() * availableExercises.length);
                const randomExercise = availableExercises.splice(randomIndex, 1)[0];
                if (!workout.some(ex => ex.name === randomExercise.name)) {
                    workout.push(randomExercise);
                }
            } else {
                break; // No more exercises to add
            }
        }

    } else if (trainingSplit) { // Handle specific splits
        const splitFormatted = trainingSplit.replace("_", " & ").toLowerCase();
        const filteredExercises = availableExercises.filter(exercise => {
            if (!exercise.muscleGroup) return false;
            const muscleGroupLower = exercise.muscleGroup.toLowerCase();
            if (trainingSplit === "back_biceps") return muscleGroupLower.includes("back") && muscleGroupLower.includes("biceps");
            else if (trainingSplit === "chest_triceps") return muscleGroupLower.includes("chest") && muscleGroupLower.includes("triceps");
            else if (trainingSplit === "legs_back") return muscleGroupLower.includes("legs") && muscleGroupLower.includes("back");
            else if (trainingSplit === "delts_traps") return muscleGroupLower.includes("delts") && muscleGroupLower.includes("traps");
            else if (trainingSplit === "core_cardio") return muscleGroupLower.includes("core") || muscleGroupLower.includes("cardio");
            return muscleGroupLower.includes(splitFormatted.replace("_", " "));
        });
        while (workout.length < numberOfExercises && filteredExercises.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredExercises.length);
            workout.push(filteredExercises.splice(randomIndex, 1)[0]);
        }
    } else {
        // Default: select numberOfExercises random exercises
        while (workout.length < numberOfExercises && availableExercises.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableExercises.length);
            workout.push(availableExercises.splice(randomIndex, 1)[0]);
        }
    }

    let totalWorkoutTime = 0;
    let workoutHTML = "<br><center><h3><u>YOUR WORKOUT</u></h3></center><ul>";
    // Now we are assigning to the globally declared workoutTextForCopy
    workoutTextForCopy = "";

workout.forEach(ex => {
        workoutHTML += `<br><br><li><b>${ex.name}</b>`;
        workoutTextForCopy += `${ex.name}`;

        let exerciseTime = 0; // To accumulate time for the current exercise

        if (ex.sets && ex.reps) {
            workoutHTML += ` - Reps: ${ex.sets}x${ex.reps}`;
            workoutTextForCopy += ` - Reps: ${ex.sets}x${ex.reps}`;
        }

        if (ex.rest) {
            workoutHTML += ` - Rest: ${ex.rest} seconds`;
            workoutTextForCopy += ` - Rest: ${ex.rest} seconds`;
            if (typeof ex.sets === 'number') {
                totalWorkoutTime += (ex.sets - 1) * ex.rest; // Rest between sets
            }
        }

        if (ex.timePerSet !== undefined) {
            let timePerSetDisplay = `${ex.timePerSet} seconds`;
            if (typeof ex.reps === 'string' && (ex.reps.toLowerCase().includes("per leg") || ex.reps.toLowerCase().includes("per arm") || ex.reps.toLowerCase().includes("per side"))) {
                timePerSetDisplay += ` per side/limb`;
            }
            workoutHTML += ` - Time per set: ${timePerSetDisplay}`;
            workoutTextForCopy += ` - Time per set: ${timePerSetDisplay}`;
            if (typeof ex.sets === 'number') {
                let numberOfRounds = ex.sets;
                let perLimb = false;
                if (typeof ex.reps === 'string') {
                    perLimb = ex.reps.toLowerCase().includes("per leg") || ex.reps.toLowerCase().includes("per arm") || ex.reps.toLowerCase().includes("per side");
                }

                if (perLimb) {
                    exerciseTime += numberOfRounds * (2 * ex.timePerSet);
                } else {
                    exerciseTime += numberOfRounds * ex.timePerSet;
                }
            }
        } else if (typeof ex.reps === 'string') {
            const lowerCaseReps = ex.reps.toLowerCase();
            if (lowerCaseReps.includes('sec') || lowerCaseReps.includes('minutes')) {
                const parts = lowerCaseReps.split(" ");
                let totalSeconds = 0;
                for (let i = 0; i < parts.length; i++) {
                    const num = parseInt(parts[i]);
                    if (!isNaN(num)) {
                        if (parts[i + 1] && parts[i + 1].startsWith('sec')) {
                            totalSeconds += num;
                        } else if (parts[i + 1] && parts[i + 1].startsWith('min')) {
                            totalSeconds += num * 60;
                        }
                    }
                }
                if (typeof ex.sets === 'number') {
                    exerciseTime += ex.sets * totalSeconds;
                } else {
                    exerciseTime += totalSeconds; // Assume 1 set if not specified
                }
            } else if (lowerCaseReps.includes('sprint') || lowerCaseReps.includes('work')) {
                const parts = lowerCaseReps.split(" / ");
                let totalIntervalTime = 0;
                parts.forEach(interval => {
                    const timePart = interval.split(" ")[0];
                    const unitPart = interval.split(" ")[1];
                    const time = parseInt(timePart);
                    if (!isNaN(time)) {
                        if (unitPart && unitPart.startsWith('sec')) {
                            totalIntervalTime += time;
                        } else if (unitPart && unitPart.startsWith('min')) {
                            totalIntervalTime += time * 60;
                        } else if (unitPart && unitPart.startsWith('m')) {
                            totalIntervalTime += 30; // Default sprint duration
                        }
                    } else if (interval.includes('+')) {
                        const timePartSprint = interval.split(" ")[0];
                        const unitPartSprint = interval.split(" ")[1];
                        const timeSprint = parseInt(timePartSprint);
                        if (!isNaN(timeSprint) && unitPartSprint && unitPartSprint.startsWith('m')) {
                            totalIntervalTime += 30;
                        }
                    }
                });
                if (typeof ex.sets === 'number') {
                    exerciseTime += ex.sets * totalIntervalTime;
                } else {
                    exerciseTime += totalIntervalTime; // Assume 1 set
                }
            }
        }

        totalWorkoutTime += exerciseTime;
        workoutTextForCopy += "\n";
    });

    const minutes = Math.round(totalWorkoutTime / 60);
    workoutHTML += `<p><i>Estimated Workout Time: ${minutes} minutes</i></p>`;

    resultDiv.innerHTML = DOMPurify.sanitize(workoutHTML);

    // Enable the copy button after the workout is generated
    document.getElementById("copy-workout").disabled = false;
});
/* ............................................... Function: Validate Workout ...................................................... */

function validateWorkoutText(workoutText) {
    const lines = workoutText.split('\n');
    const errors = [];
    let isValid = true;

    lines.forEach((line, index) => {
        if (line.trim() && !line.includes("Estimated Workout Time")) {
            const exerciseMatch = line.match(/^(.+?) - Reps:/);
            const repsMatch = line.match(/Reps: (.+?)m? - Rest:/);
            const restMatch = line.match(/Rest: (.+?) (seconds?|minutes?)\.?/); // Modified regex

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
    let workoutText = document.getElementById('paste-text').value;
    workoutText = DOMPurify.sanitize(workoutText);

    if (!workoutText.trim()) {
        alert("Please paste workout text before downloading.");
        return;
    }

    try {
        const validationResult = validateWorkoutText(workoutText);

        if (!validationResult.isValid) {
            alert("Workout text validation errors:\n" + validationResult.errors.join('\n'));
            return;
        }

        const lines = workoutText.split('\n');
        let tableData = [];
        let headers = ["Exercise", "Reps", "TPS", "Rest", "Set 1", "Set 2", "Set 3", "Set 4", "Set 5", "Set 6"];
        let totalWorkoutTime = 0;

        lines.forEach(line => {
            if (line.trim() && !line.includes("Estimated Workout Time")) {
                const exerciseMatch = line.match(/^(.+?) - Reps: (.+?)(?: - Rest: (.+?) (seconds?|minutes?))?(?: - Time per set: (.+?) (seconds?|minutes?))?\s*$/i);

                if (exerciseMatch) {
                    const exerciseName = exerciseMatch[1].replace(/<b>|<\/b>/g, '').trim();
                    const repsInfo = exerciseMatch[2].trim();
                    const restValue = exerciseMatch[3] ? exerciseMatch[3].trim() : "";
                    const restUnit = exerciseMatch[4] ? exerciseMatch[4].replace(/seconds?/i, 'sec').replace(/minutes?/i, 'min').trim() : "";
                    const restInfoFormatted = restValue && restUnit ? `${restValue} ${restUnit}` : "";
                    const restInSeconds = restValue && restUnit.startsWith('min') ? parseInt(restValue) * 60 : parseInt(restValue);
                    const tpsValue = exerciseMatch[5] ? exerciseMatch[5].trim() : "";
                    const tpsUnit = exerciseMatch[6] ? exerciseMatch[6].replace(/seconds?/i, 'sec').replace(/minutes?/i, 'min').trim() : "";
                    const tpsInfoFormatted = tpsValue && tpsUnit ? `${tpsValue} ${tpsUnit}` : "";
                    const tpsInSeconds = tpsValue && tpsUnit.startsWith('min') ? parseFloat(tpsValue) * 60 : parseFloat(tpsValue);

                    const setsMatch = repsInfo.match(/^(\d+)x/i);
                    const sets = setsMatch ? parseInt(setsMatch[1]) : 1;

                    if (restInSeconds) {
                        totalWorkoutTime += (sets - 1) * restInSeconds;
                    }
                    if (tpsInSeconds) {
                        totalWorkoutTime += sets * tpsInSeconds;
                    }

                    // Add the exercise row
                    tableData.push([exerciseName, repsInfo, tpsInfoFormatted, restInfoFormatted, "        |        ", "        |        ", "        |        ", "        |        ", "        |        ", "        |        "]);
                    // Add a row for warm-up in the exercise column
                    tableData.push(["  Warm-up:", "", "", "", "|", "|", "|", "|", "|", "|"]);
                    // Add a row for notes in the exercise column
                    tableData.push(["    Notes:", "", "", "", "", "", "", "", "", "", "", ""]);
                }
            }
        });

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.autoTable({
            head: [headers],
            body: tableData,
            startY: 10,
            styles: {
                fontSize: 7,
                cellPadding: 1.5,
                lineWidth: 0.1,
                borderColor: [1, 1, 1],
                textColor: [0, 0, 0],
                valign: 'middle',
                halign: 'left',
                font: 'helvetica',
                fontStyle: 'normal',
            },
            headStyles: {
                fontSize: 9,
                fillColor: [220, 220, 220],
                textColor: [0, 0, 0],
                lineWidth: 0.5,
                borderColor: [169, 169, 169],
                valign: 'middle',
                halign: 'center',
                fontStyle: 'bold',
            },
            columnStyles: {
                0: { cellWidth: 'auto', halign: 'left' },
                1: { cellWidth: 'auto', halign: 'center' },
                2: { cellWidth: 'auto', halign: 'center' },
                3: { cellWidth: 'auto', halign: 'center' },
                4: { cellWidth: 'auto', halign: 'center' },
                5: { cellWidth: 'auto', halign: 'center' },
                6: { cellWidth: 'auto', halign: 'center' },
                7: { cellWidth: 'auto', halign: 'center' },
                8: { cellWidth: 'auto', halign: 'center' },
                9: { cellWidth: 'auto', halign: 'center' },
                10: { cellWidth: 'auto', halign: 'center' },
                11: { cellWidth: 'auto', halign: 'center' },
            },
            tableLineWidth: 0.5,
            tableBorderColor: [169, 169, 169],
 didParseCell: function (data) {
                const rowIndex = data.row.index;

                // Style for Warm-up row (entire row)
                if ((rowIndex - 1) % 3 === 0 && rowIndex > 0) {
                    if (data.column.index === 0 && data.cell.raw.includes('Warm-up:')) {
                        data.cell.styles.fontStyle = 'italic';
                        data.cell.styles.textColor = [105, 105, 105];
                        data.cell.styles.cellPadding = { top: 0, right: data.cell.styles.cellPadding.right, bottom: 0, left: data.cell.styles.cellPadding.left };
                    }
                    data.cell.styles.fillColor = [248, 248, 248]; // Mid-gray background for the entire row
                }
                // Style for Notes row
                else if ((rowIndex - 2) % 3 === 0 && rowIndex > 1 && data.column.index === 0 && data.cell.raw.includes('Notes:')) {
                    data.cell.styles.fontStyle = 'italic';
                    data.cell.styles.textColor = [150, 150, 150];
                    data.cell.styles.cellPadding = { top: 0, right: data.cell.styles.cellPadding.right, bottom: 0, left: data.cell.styles.cellPadding.left };
                    data.cell.styles.lineWidth = { top: 0, bottom: 0, left: data.cell.styles.lineWidth, right: data.cell.styles.lineWidth };
                    data.cell.styles.borderColor = [240, 240, 240];
                    delete data.cell.styles.fillColor; // Ensure no background color (or override)
                }
                // Reduce height of empty cells in Warm-up and Notes rows
                else if (rowIndex % 3 > 0 && data.column.index > 0) {
                    data.cell.styles.minCellHeight = 5;
                    data.cell.styles.padding = { top: 0, bottom: 0 };
                    delete data.cell.styles.fillColor; // Ensure no background color
                }
                // Reduce height of separator cells
                else if (data.cell.raw === '/') {
                    data.cell.styles.minCellHeight = 5;
                    data.cell.styles.padding = { top: 0, bottom: 0 };
                    delete data.cell.styles.fillColor; // Ensure no background color
                }
                // Make every exercise row gray
                if (rowIndex % 3 === 0) { // Exercise rows have indices 0, 3, 6, etc.
                    data.cell.styles.fillColor = [240, 240, 240]; // Light gray
                } else if ((rowIndex - 1) % 3 !== 0 && (rowIndex - 2) % 3 !== 0) {
                    delete data.cell.styles.fillColor; // Ensure notes rows are white
                }
            }
        });

        const tableEndY = doc.autoTable.previous.finalY;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(105, 105, 105);
        const timeLine = lines.find(line => line.includes("Estimated Workout Time"));
        const timeText = timeLine ? timeLine.replace("seconds", "sec") : "";
        const estimatedMinutes = Math.round(totalWorkoutTime / 60);
        doc.text(`Estimated Workout Time: ${estimatedMinutes} minutes`, 10, tableEndY + 10);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');

        doc.save("workout.pdf");

    } catch (mainError) {
        console.error("Error generating PDF:", mainError);
        console.error("Error stack:", mainError.stack);
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

    console.log("Number of categories in exercises:", Object.keys(exercises).length); // Check the number of categories

    for (const category in exercises) {
        console.log("Processing category:", category); // Check which category is being processed
        for (const level in exercises[category]) {
            console.log("Processing level:", level); // Check which level is being processed
            for (const type in exercises[category][level]) {
                console.log("Processing type:", type); // Check which type is being processed
                const exerciseList = exercises[category][level][type];
                console.log("Exercise list for this type:", exerciseList); // Check the exercise list

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

    console.log("Total number of unique exercises found:", allExercises.length); // Check the total number of exercises found

    allExercises.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    allExercises.forEach(exercise => {
        const row = document.createElement("tr");
        const button = document.createElement("button");
        button.className = "copy-exercise";
        let copyText = `${exercise.name} - Reps: ${exercise.sets}x${exercise.reps}`;
        if (exercise.rest) {
            copyText += ` - Rest: ${exercise.rest} seconds`; // Removed trailing period here
        }
        if (exercise.timePerSet !== undefined) {
            copyText += ` - Time per set: ${exercise.timePerSet} seconds`; // Removed trailing period here
        }
        button.dataset.exercise = copyText;
        button.textContent = exercise.name;
        const cell1 = document.createElement("td");
        cell1.appendChild(button);

        const cell2 = document.createElement("td"); // New cell for Muscle Group
        cell2.textContent = exercise.muscleGroup || ''; // Display muscle group

        const cell4 = document.createElement("td");
        cell4.textContent = exercise.sets;

        const cell5 = document.createElement("td");
        cell5.textContent = exercise.reps;

        const cell6 = document.createElement("td");
        cell6.textContent = exercise.rest;

        const cell7 = document.createElement("td");
        cell7.textContent = exercise.timePerSet || ''; // Display time per set

        row.appendChild(cell1);
        row.appendChild(cell2); // Append the Muscle Group cell
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
        row.appendChild(cell7);

        tableBody.appendChild(row);
    });

    // Attach event listeners for individual copy buttons *after* the elements are created
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

// The "Copy Workout" button's event listener should be outside the populateExerciseTable function
document.getElementById("copy-workout").addEventListener("click", function() {
    const textToCopy = workoutTextForCopy.replace(/\.$/gm, ''); // Remove trailing periods from each line
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Workout copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
            alert("Failed to copy workout.");
        });
});

document.addEventListener('DOMContentLoaded', function() {
    populateExerciseTable();

    // Set default values on page load
    document.getElementById("goal").value = "muscle";
    document.getElementById("experience").value = "beginner";
    document.getElementById("modality").value = "general";
});
