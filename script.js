const exercises = {
muscle: {
beginner: {
dumbbells: [
{ name: "Dumbbell Rows", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
{ name: "Dumbbell Bicep Curls", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
{ name: "Dumbbell Shoulder Press", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
{ name: "Dumbbell Lunges", sets: 3, reps: 12, rest: 60, timePerSet: 60 },
{ name: "Dumbbell Chest Press", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
{ name: "Dumbbell Romanian Deadlifts", sets: 3, reps: 12, rest: 60, timePerSet: 60 },
{ name: "Dumbbell Lateral Raises", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
{ name: "Dumbbell Hammer Curls", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
{ name: "Dumbbell Goblet Squats", sets: 3, reps: 12, rest: 60, timePerSet: 50 },
{ name: "Dumbbell Triceps Extensions", sets: 3, reps: 12, rest: 60, timePerSet: 35 },
],
bodyweight: [
{ name: "Push ups", sets: 3, reps: 10, rest: 60, timePerSet: 30 },
{ name: "Squats", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
{ name: "Lunges", sets: 3, reps: 12, rest: 60, timePerSet: 45 },
{ name: "Plank", sets: 3, reps: "30 sec", rest: 60, timePerSet: 30 },
{ name: "Crunches", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
{ name: "Glute Bridges", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
{ name: "Incline Push-ups", sets: 3, reps: 12, rest: 60, timePerSet: 25 },
{ name: "Wall Sit", sets: 3, reps: "30 sec", rest: 60, timePerSet: 30 },
{ name: "Leg Raises", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
{ name: "Superman", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
],
machines: [
{ name: "Chest Press Machine", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
{ name: "Lat Pulldown Machine", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
{ name: "Leg Press Machine", sets: 3, reps: 12, rest: 60, timePerSet: 50 },
{ name: "Seated Row Machine", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
{ name: "Shoulder Press Machine", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
{ name: "Leg Extension Machine", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
{ name: "Hamstring Curl Machine", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
{ name: "Calf Raise Machine", sets: 3, reps: 15, rest: 60, timePerSet: 25 },
{ name: "Ab Crunch Machine", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
{ name: "Back Extension Machine", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
],
barbells: [
{ name: "Barbell Bench Press", sets: 3, reps: 8, rest: 75, timePerSet: 60 },
{ name: "Barbell Squats", sets: 3, reps: 8, rest: 75, timePerSet: 75 },
{ name: "Barbell Rows", sets: 3, reps: 8, rest: 75, timePerSet: 60 },
{ name: "Barbell Overhead Press", sets: 3, reps: 8, rest: 75, timePerSet: 60 },
{ name: "Barbell Romanian Deadlifts", sets: 3, reps: 10, rest: 75, timePerSet: 75 },
{ name: "Barbell Bicep Curls", sets: 3, reps: 10, rest: 75, timePerSet: 45 },
{ name: "Barbell Triceps Extensions", sets: 3, reps: 10, rest: 75, timePerSet: 45 },
{ name: "Barbell Lunges", sets: 3, reps: 10, rest: 75, timePerSet: 75 },
{ name: "Barbell Shrugs", sets: 3, reps: 12, rest: 75, timePerSet: 30 },
{ name: "Barbell Calf Raises", sets: 3, reps: 15, rest: 75, timePerSet: 30 },
],
},
intermediate: {
barbell: [
{ name: "Barbell Bench Press", sets: 4, reps: 8, rest: 90, timePerSet: 75 },
{ name: "Barbell Squats", sets: 4, reps: 8, rest: 90, timePerSet: 90 },
{ name: "Barbell Rows", sets: 4, reps: 8, rest: 90, timePerSet: 75 },
{ name: "Barbell Overhead Press", sets: 4, reps: 8, rest: 90, timePerSet: 75 },
{ name: "Barbell Deadlifts", sets: 3, reps: 6, rest: 120, timePerSet: 90 },
{ name: "Barbell Romanian Deadlifts", sets: 4, reps: 10, rest: 90, timePerSet: 90 },
{ name: "Barbell Hip Thrusts", sets: 4, reps: 10, rest: 90, timePerSet: 60 },
{ name: "Barbell Lunges", sets: 4, reps: 10, rest: 90, timePerSet: 90 },
{ name: "Barbell Shrugs", sets: 4, reps: 12, rest: 90, timePerSet: 35 },
{ name: "Barbell Bicep Curls", sets: 4, reps: 10, rest: 90, timePerSet: 50 },
],
gym: [
{ name: "Lat Pulldowns", sets: 4, reps: 10, rest: 75, timePerSet: 45 },
{ name: "Leg Press", sets: 4, reps: 10, rest: 75, timePerSet: 60 },
{ name: "Cable Rows", sets: 4, reps: 10, rest: 75, timePerSet: 45 },
{ name: "Chest Flyes", sets: 4, reps: 12, rest: 75, timePerSet: 40 },
{ name: "Pull ups", sets: 3, reps: "25", rest: 90, timePerSet: 60 }, // Assuming ~25 seconds for a set
{ name: "Dips", sets: 3, reps: "As Many As Possible", rest: 90, timePerSet: 45 }, // Assuming ~45 seconds
{ name: "Leg Extensions", sets: 4, reps: 12, rest: 75, timePerSet: 30 },
{ name: "Hamstring Curls", sets: 4, reps: 12, rest: 75, timePerSet: 30 },
{ name: "Cable Triceps Pushdowns", sets: 4, reps: 12, rest: 75, timePerSet: 30 },
{ name: "Face Pulls", sets: 4, reps: 15, rest: 75, timePerSet: 35 },
],
dumbbells: [
{ name: "Dumbbell Bench Press", sets: 4, reps: 10, rest: 75, timePerSet: 50 },
{ name: "Dumbbell Rows", sets: 4, reps: 10, rest: 75, timePerSet: 50 },
{ name: "Dumbbell Shoulder Press", sets: 4, reps: 10, rest: 75, timePerSet: 45 },
{ name: "Dumbbell Romanian Deadlifts", sets: 4, reps: 12, rest: 75, timePerSet: 75 },
{ name: "Dumbbell Lunges", sets: 4, reps: 12, rest: 75, timePerSet: 75 },
{ name: "Dumbbell Bicep Curls", sets: 4, reps: 12, rest: 75, timePerSet: 35 },
{ name: "Dumbbell Hammer Curls", sets: 4, reps: 12, rest: 75, timePerSet: 35 },
{ name: "Dumbbell Triceps Extensions", sets: 4, reps: 12, rest: 75, timePerSet: 40 },
{ name: "Dumbbell Lateral Raises", sets: 4, reps: 15, rest: 75, timePerSet: 35 },
{ name: "Dumbbell Goblet Squats", sets: 4, reps: 12, rest: 75, timePerSet: 60 },
],
bodyweight: [
{ name: "Push ups", sets: 4, reps: "25", rest: 75, timePerSet: 50 },
{ name: "Squats", sets: 4, reps: 15, rest: 60, timePerSet: 40 },
{ name: "Lunges", sets: 4, reps: 15, rest: 60, timePerSet: 60 },
{ name: "Plank", sets: 4, reps: "45 sec", rest: 60, timePerSet: 45 },
{ name: "Crunches", sets: 4, reps: 20, rest: 60, timePerSet: 35 },
{ name: "Glute Bridges", sets: 4, reps: 20, rest: 60, timePerSet: 35 },
{ name: "Incline Push ups", sets: 4, reps: 15, rest: 60, timePerSet: 35 },
{ name: "Wall Sit", sets: 4, reps: "45 sec", rest: 60, timePerSet: 45 },
{ name: "Leg Raises", sets: 4, reps: 15, rest: 60, timePerSet: 35 },
{ name: "Superman", sets: 4, reps: 20, rest: 60, timePerSet: 35 },
],
},
advanced: {
gym: [
{ name: "Deadlifts", sets: 3, reps: 6, rest: 120, timePerSet: 75 },
{ name: "Pull ups", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
{ name: "Overhead Press", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
{ name: "Barbell Hip Thrusts", sets: 3, reps: 10, rest: 120, timePerSet: 60 },
{ name: "Weighted Pull ups", sets: 3, reps: 6, rest: 120, timePerSet: 75 },
{ name: "Weighted Dips", sets: 3, reps: 6, rest: 120, timePerSet: 60 },
{ name: "Barbell Rows Pendlay", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
{ name: "Incline Barbell Press", sets: 3, reps: 8, rest: 120, timePerSet: 75 },
{ name: "Front Squats", sets: 3, reps: 8, rest: 120, timePerSet: 75 },
{ name: "Romanian Deadlifts", sets: 3, reps: 10, rest: 120, timePerSet: 75 },
],
barbell: [
{ name: "Barbell Bench Press", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
{ name: "Barbell Squats", sets: 4, reps: 6, rest: 120, timePerSet: 90 },
{ name: "Barbell Deadlifts", sets: 3, reps: 5, rest: 180, timePerSet: 90 },
{ name: "Barbell Overhead Press", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
{ name: "Barbell Rows", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
{ name: "Barbell Hip Thrusts", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
{ name: "Barbell Lunges", sets: 4, reps: 8, rest: 120, timePerSet: 90 },
{ name: "Barbell Bicep Curls", sets: 4, reps: 8, rest: 120, timePerSet: 50 },
{ name: "Barbell Triceps Extensions", sets: 4, reps: 8, rest: 120, timePerSet: 50 },
{ name: "Barbell Shrugs", sets: 4, reps: 10, rest: 120, timePerSet: 35 },
],
dumbbells: [
{ name: "Dumbbell Bench Press", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
{ name: "Dumbbell Rows", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
{ name: "Dumbbell Shoulder Press", sets: 4, reps: 8, rest: 120, timePerSet: 50 },
{ name: "Dumbbell Romanian Deadlifts", sets: 4, reps: 10, rest: 120, timePerSet: 90 },
{ name: "Dumbbell Lunges", sets: 4, reps: 10, rest: 120, timePerSet: 90 },
{ name: "Dumbbell Bicep Curls", sets: 4, reps: 10, rest: 120, timePerSet: 40 },
{ name: "Dumbbell Hammer Curls", sets: 4, reps: 10, rest: 120, timePerSet: 40 },
{ name: "Dumbbell Triceps Extensions", sets: 4, reps: 10, rest: 120, timePerSet: 50 },
{ name: "Dumbbell Lateral Raises", sets: 4, reps: 12, rest: 120, timePerSet: 40 },
{ name: "Dumbbell Goblet Squats",sets: 4, reps: 10, rest: 120, timePerSet: 75 },
],
bodyweight: [
{ name: "Push ups Weighted", sets: 4, reps: 8, rest: 120, timePerSet: 60 },
{ name: "Pistol Squats", sets: 3, reps: 6, rest: 120, timePerSet: 75 },
{ name: "Pull ups Weighted", sets: 4, reps: 6, rest: 120, timePerSet: 75 },
{ name: "Dips Weighted", sets: 4, reps: "As Many As Possible", rest: 120, timePerSet: 60 },
{ name: "Handstand Push ups", sets: 3, reps: "As 5", rest: 120, timePerSet: 90 },
{ name: "Muscle ups", sets: 3, reps: "5", rest: 180, timePerSet: 120 },
{ name: "Planche Leans", sets: 3, reps: "15", rest: 120, timePerSet: 60 },
{ name: "Front Lever Holds", sets: 3, reps: "15 sec hold", rest: 120, timePerSet: 15 },
{ name: "One Arm Pull ups Assisted", sets: 3, reps: "As Many As Possible", rest: 180, timePerSet: 90 },
{ name: "Advanced Plank Variations", sets: 3, reps: "60 sec hold", rest: 120, timePerSet: 60 },
],
},
},
strength: {
beginner: {
bodyweight: [
{ name: "Push ups", sets: 3, reps: 8, rest: 90, timePerSet: 30 },
{ name: "Squats", sets: 3, reps: 10, rest: 90, timePerSet: 30 },
{ name: "Plank", sets: 3, reps: "20 sec", rest: 90, timePerSet: 20 },
{ name: "Incline Push ups", sets: 3, reps: 10, rest: 90, timePerSet: 25 },
{ name: "Glute Bridges", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
{ name: "Walking Lunges", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
{ name: "Wall Sit", sets: 3, reps: "30 sec", rest: 90, timePerSet: 30 },
{ name: "Crunches", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
{ name: "Superman", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
{ name: "Knee Push ups", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
],
dumbbells: [
{ name: "Dumbbell Squats", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
{ name: "Dumbbell Rows", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
{ name: "Dumbbell Bench Press", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
{ name: "Dumbbell Shoulder Press", sets: 3, reps: 8, rest: 90, timePerSet: 40 },
{ name: "Dumbbell Romanian Deadlifts", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
{ name: "Dumbbell Lunges", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
{ name: "Dumbbell Bicep Curls", sets: 3, reps: 10, rest: 90, timePerSet: 30 },
{ name: "Dumbbell Triceps Extensions", sets: 3, reps: 10, rest: 90, timePerSet: 35 },
{ name: "Dumbbell Goblet Squats", sets: 3, reps: 10, rest: 90, timePerSet: 50 },
{ name: "Dumbbell Calf Raises", sets: 3, reps: 12, rest: 90, timePerSet: 20 },
],
barbells: [
{ name: "Barbell Squats", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
{ name: "Barbell Bench Press", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
{ name: "Barbell Rows", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
{ name: "Barbell Overhead Press", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
{ name: "Barbell Romanian Deadlifts", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
{ name: "Barbell Lunges", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
{ name: "Barbell Bicep Curls", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
{ name: "Barbell Triceps Extensions", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
{ name: "Barbell Shrugs", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
{ name: "Barbell Calf Raises", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
],
machines: [
{ name: "Leg Press Machine", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
{ name: "Chest Press Machine", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
{ name: "Lat Pulldown Machine", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
{ name: "Seated Row Machine", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
{ name: "Shoulder Press Machine", sets: 3, reps: 10, rest: 90, timePerSet: 35 },
{ name: "Leg Extension Machine", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
{ name: "Hamstring Curl Machine", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
{ name: "Calf Raise Machine", sets: 3, reps: 15, rest: 90, timePerSet: 20 },
{ name: "Ab Crunch Machine", sets: 3, reps: 15, rest: 90, timePerSet: 15 },
{ name: "Back Extension Machine", sets: 3, reps: 15, rest: 90, timePerSet: 25 },
],
},
intermediate: {
barbell: [
{ name: "Barbell Squats", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
{ name: "Barbell Deadlifts", sets: 1, reps: 5, rest: 180, timePerSet: 60 },
{ name: "Barbell Bench Press", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
{ name: "Barbell Overhead Press", sets: 3, reps: 5, rest: 120, timePerSet: 60 },
{ name: "Barbell Rows", sets: 3, reps: 5, rest: 120, timePerSet: 60 },
{ name: "Barbell Power Cleans", sets: 3, reps: 3, rest: 120, timePerSet: 45 },
{ name: "Barbell Front Squats", sets: 3, reps: 5, rest: 120, timePerSet: 75 },
{ name: "Barbell Good Mornings", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
{ name: "Barbell Lunges", sets: 3, reps: 8, rest: 90, timePerSet: 60 },
{ name: "Barbell Shrugs", sets: 3, reps: 8, rest: 90, timePerSet: 20 },
],
dumbbells: [
{ name: "Dumbbell Bench Press", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
{ name: "Dumbbell Rows", sets: 3, reps: 8, rest: 90, timePerSet: 50 },
{ name: "Dumbbell Shoulder Press", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
{ name: "Dumbbell Romanian Deadlifts", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
{ name: "Dumbbell Lunges", sets: 3, reps: 10, rest: 90, timePerSet: 75 },
{ name: "Dumbbell Bicep Curls", sets: 3, reps: 10, rest: 90, timePerSet: 35 },
{ name: "Dumbbell Triceps Extensions", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
{ name: "Dumbbell Goblet Squats", sets: 3, reps: 10, rest: 90, timePerSet: 60 },
{ name: "Dumbbell Pull overs", sets: 3, reps: 12, rest: 90, timePerSet: 40 },
{ name: "Dumbbell Calf Raises", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
],
bodyweight: [
{ name: "Pull ups", sets: 3, reps: "As Many As Possible", rest: 90, timePerSet: 45 },
{ name: "Dips", sets: 3, reps: "As Many As Possible", rest: 90, timePerSet: 45 },
{ name: "Push ups", sets: 3, reps: "As Many As Possible", rest: 90, timePerSet: 45 },
{ name: "Plank", sets: 3, reps: "45 sec", rest: 90, timePerSet: 45 },
{ name: "Chin ups", sets: 3, reps: "As Many As Possible", rest: 90, timePerSet: 45 },
{ name: "Inverted Rows", sets: 3, reps: "As Many As Possible", rest: 90, timePerSet: 45 },
{ name: "Lunges", sets: 3, reps: 12, rest: 60, timePerSet: 60 },
{ name: "Glute Bridges", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
{ name: "Hanging Leg Raises", sets: 3, reps: 10, rest: 90, timePerSet: 45 },
{ name: "Back Extensions", sets: 3, reps: 15, rest: 60, timePerSet: 30 },
],
},
advanced: {
gym: [
{ name: "Deadlifts", sets: 3, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Bench Press", sets: 3, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Squats", sets: 3, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Overhead Press", sets: 3, reps: 5, rest: 240, timePerSet: 60 },
{ name: "Barbell Rows", sets: 3, reps: 5, rest: 240, timePerSet: 60 },
{ name: "Weighted Pull ups", sets: 3, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Weighted Dips", sets: 3, reps: 5, rest: 240, timePerSet: 60 },
{ name: "Front Squats", sets: 3, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Power Cleans", sets: 3, reps: 3, rest: 240, timePerSet: 45 },
{ name: "Snatch", sets: 3, reps: 2, rest: 240, timePerSet: 45 },
],
barbell: [
{ name: "Barbell Squats", sets: 5, reps: 3, rest: 240, timePerSet: 75 },
{ name: "Barbell Bench Press", sets: 5, reps: 3, rest: 240, timePerSet: 75 },
{ name: "Barbell Deadlifts", sets: 3, reps: 3, rest: 300, timePerSet: 60 },
{ name: "Barbell Overhead Press", sets: 5, reps: 3, rest: 240, timePerSet: 60 },
{ name: "Barbell Rows", sets: 5, reps: 3, rest: 240, timePerSet: 60 },
{ name: "Barbell Front Squats", sets: 3, reps: 3, rest: 240, timePerSet: 75 },
{ name: "Barbell Power Cleans", sets: 3, reps: 2, rest: 240, timePerSet: 45 },
{ name: "Barbell Snatch", sets: 3, reps: 1, rest: 240, timePerSet: 45 },
{ name: "Barbell Good Mornings", sets: 3, reps: 5, rest: 180, timePerSet: 45 },
{ name: "Barbell Lunges", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
],
dumbbells: [
{ name: "Dumbbell Bench Press", sets: 3, reps: 5, rest: 180, timePerSet: 50 },
{ name: "Dumbbell Rows", sets: 3, reps: 5, rest: 180, timePerSet: 50 },
{ name: "Dumbbell Shoulder Press", sets: 3, reps: 5, rest: 180, timePerSet: 45 },
{ name: "Dumbbell Romanian Deadlifts", sets: 3, reps: 8, rest: 180, timePerSet: 75 },
{ name: "Dumbbell Lunges", sets: 3, reps: 8, rest: 180, timePerSet: 75 },
{ name: "Dumbbell Bicep Curls", sets: 3, reps: 8, rest: 180, timePerSet: 35 },
{ name: "Dumbbell Triceps Extensions", sets: 3, reps: 8, rest: 180, timePerSet: 40 },
{ name: "Dumbbell Goblet Squats", sets: 3, reps: 8, rest: 180, timePerSet: 60 },
{ name: "Dumbbell Pull overs", sets: 3, reps: 10, rest: 180, timePerSet: 40 },
{ name: "Dumbbell Calf Raises", sets: 3, reps: 10, rest: 180, timePerSet: 25 },
],
bodyweight: [
{ name: "Pull ups Weighted", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
{ name: "Dips Weighted", sets: 3, reps: 5, rest: 180, timePerSet: 45 },
{ name: "Push ups Plyometric", sets: 3, reps: 8, rest: 120, timePerSet: 30 },
{ name: "Pistol Squats", sets: 3, reps: 5, rest: 180, timePerSet: 75 },
{ name: "Handstand Push ups Assisted", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
{ name: "Front Lever Holds Progression", sets: 3, reps: "10 sec", rest: 180, timePerSet: 10 },
{ name: "Back Lever Holds Progression", sets: 3, reps: "10 sec", rest: 180, timePerSet: 10 },
{ name: "Muscle ups Progression", sets: 3, reps: 3, rest: 180, timePerSet: 90 },
{ name: "One Arm Push up Progression", sets: 3, reps: 3, rest: 120, timePerSet: 45 },
{ name: "Dragon Flags Progression", sets: 3, reps: 8, rest: 120, timePerSet: 45 },
],
},
},
endurance: {
beginner: {
bodyweight: [
{ name: "Jumping Jacks", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "High Knees", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "Walking", sets: 1, reps: "10 minutes", rest: 30, timePerSet: 600 },
{ name: "Butt Kicks", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "Mountain Climbers", sets: 3, reps: 20, rest: 40, timePerSet: 20 },
{ name: "Step ups", sets: 3, reps: 10, rest: 30, timePerSet: 30 },
],
dumbbells: [
{ name: "Dumbbell Thrusters", sets: 3, reps: 10, rest: 45, timePerSet: 40 },
{ name: "Dumbbell Swings", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
{ name: "Dumbbell Shadow Boxing", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
],
gym: [
{ name: "Treadmill Run", sets: 1, reps: "10 minutes", rest: 30, timePerSet: 600 },
{ name: "Elliptical", sets: 1, reps: "10 minutes", rest: 30, timePerSet: 600 },
{ name: "Stationary Bike", sets: 1, reps: "10 minutes", rest: 30, timePerSet: 600 },
],
},
intermediate: {
bodyweight: [
{ name: "Burpees", sets: 3, reps: 30, rest: 30, timePerSet: 60 },
{ name: "Mountain Climbers", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "Running", sets: 1, reps: "20 min", rest: 30, timePerSet: 1200 },
{ name: "Jump Squats", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
{ name: "High Plank Jacks", sets: 3, reps: 20, rest: 30, timePerSet: 20 },
{ name: "Skater Jumps", sets: 3, reps: 15, rest: 30, timePerSet: 30 },
],
dumbbells: [
{ name: "Dumbbell Snatches", sets: 3, reps: 10, rest: 45, timePerSet: 45 },
{ name: "Dumbbell Push Press", sets: 3, reps: 12, rest: 45, timePerSet: 40 },
{ name: "Dumbbell Renegade Rows", sets: 3, reps: 10, rest: 45, timePerSet: 60 },
{ name: "Dumbbell Walking Lunges", sets: 3, reps: 10, rest: 30, timePerSet: 60 },
{ name: "Dumbbell Burpees", sets: 3, reps: 8, rest: 45, timePerSet: 60 },
],
gym: [
{ name: "Rowing Machine", sets: 1, reps: "900 seconds", rest: 30, timePerSet: 900 },
{ name: "Assault Bike", sets: 1, reps: "720 seconds", rest: 30, timePerSet: 720 },
{ name: "Stair Climber", sets: 1, reps: "900 seconds", rest: 30, timePerSet: 900 },
{ name: "Battle Ropes", sets: 3, reps: 30, rest: 45, timePerSet: 30 },
{ name: "Sled Push", sets: 3, reps: 20, rest: 60, timePerSet: 45, reps: 8, rest: 180, timePerSet: 60 },
{ name: "Dumbbell Pull overs", sets: 3, reps: 10, rest: 180, timePerSet: 40 },
{ name: "Dumbbell Calf Raises", sets: 3, reps: 10, rest: 180, timePerSet: 25 },
],
bodyweight: [
{ name: "Pull ups Weighted", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
{ name: "Dips Weighted", sets: 3, reps: 5, rest: 180, timePerSet: 45 },
{ name: "Push ups Plyometric", sets: 3, reps: 8, rest: 120, timePerSet: 30 },
{ name: "Pistol Squats", sets: 3, reps: 5, rest: 180, timePerSet: 75 },
{ name: "Handstand Push ups Assisted", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
{ name: "Front Lever Holds Progression", sets: 3, reps: "10 sec", rest: 180, timePerSet: 10 },
{ name: "Back Lever Holds Progression", sets: 3, reps: "10 sec", rest: 180, timePerSet: 10 },
{ name: "Muscle ups Progression", sets: 3, reps: 3, rest: 180, timePerSet: 90 },
{ name: "One Arm Push up Progression", sets: 3, reps: 3, rest: 120, timePerSet: 45 },
{ name: "Dragon Flags Progression", sets: 3, reps: 8, rest: 120, timePerSet: 45 },
],
},
},
endurance: {
beginner: {
bodyweight: [
{ name: "Jumping Jacks", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "High Knees", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "Walking", sets: 1, reps: "10 minutes", rest: 30, timePerSet: 600 },
{ name: "Butt Kicks", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "Mountain Climbers", sets: 3, reps: 20, rest: 40, timePerSet: 20 },
{ name: "Step ups", sets: 3, reps: 10, rest: 30, timePerSet: 30 },
],
dumbbells: [
{ name: "Dumbbell Thrusters", sets: 3, reps: 10, rest: 45, timePerSet: 40 },
{ name: "Dumbbell Swings", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
{ name: "Dumbbell Shadow Boxing", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
],
gym: [
{ name: "Treadmill Run", sets: 1, reps: "10 minutes", rest: 30, timePerSet: 600 },
{ name: "Elliptical", sets: 1, reps: "10 minutes", rest: 30, timePerSet: 600 },
{ name: "Stationary Bike", sets: 1, reps: "10 minutes", rest: 30, timePerSet: 600 },
],
},
intermediate: {
bodyweight: [
{ name: "Burpees", sets: 3, reps: 30, rest: 30, timePerSet: 60 },
{ name: "Mountain Climbers", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "Running", sets: 1, reps: "20 minutes", rest: 30, timePerSet: 1200 },
{ name: "Jump Squats", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
{ name: "High Plank Jacks", sets: 3, reps: 20, rest: 30, timePerSet: 20 },
{ name: "Skater Jumps", sets: 3, reps: 15, rest: 30, timePerSet: 30 },
],
dumbbells: [
{ name: "Dumbbell Snatches", sets: 3, reps: 10, rest: 45, timePerSet: 45 },
{ name: "Dumbbell Push Press", sets: 3, reps: 12, rest: 45, timePerSet: 40 },
{ name: "Dumbbell Renegade Rows", sets: 3, reps: 10, rest: 45, timePerSet: 60 },
{ name: "Dumbbell Walking Lunges", sets: 3, reps: 10, rest: 30, timePerSet: 60 },
{ name: "Dumbbell Burpees", sets: 3, reps: 8, rest: 45, timePerSet: 60 },
],
gym: [
{ name: "Rowing Machine", sets: 1, reps: "900 seconds", rest: 30, timePerSet: 900 },
{ name: "Assault Bike", sets: 1, reps: "720 seconds", rest: 30, timePerSet: 720 },
{ name: "Stair Climber", sets: 1, reps: "900 seconds", rest: 30, timePerSet: 900 },
{ name: "Battle Ropes", sets: 3, reps: 30, rest: 45, timePerSet: 30 },
{ name: "Sled Push", sets: 3, reps: 20, rest: 60, timePerSet: 45 },
],
},
advanced: {
bodyweight: [
{ name: "Long Distance Running", sets: 1, reps: "60 minutes", rest: 30, timePerSet: 3600 },
{ name: "HIIT Training", sets: 4, reps: 20, rest: 10, timePerSet: 20 }, // Assuming each rep takes ~1 second
{ name: "Sprints", sets: 8, reps: 100, rest: 60, timePerSet: 20 }, // Assuming 100m sprint takes ~20 seconds
{ name: "Plyometric Circuit", sets: 3, reps: 10, rest: 60, timePerSet: 45 }, // Estimate for a set of plyos
{ name: "Hill Sprints", sets: 6, reps: 50, rest: 90, timePerSet: 15 }, // Assuming 50m hill sprint
{ name: "Muscle Ups", sets: 5, reps: "AMRAP", rest: 120, timePerSet: 60 }, // Estimate per set
],
dumbbells: [
{ name: "Dumbbell Complex", sets: 4, reps: 8, rest: 60, timePerSet: 60 }, // Estimate for a complex
{ name: "Dumbbell Snatch and Overhead Squat", sets: 4, reps: 6, rest: 90, timePerSet: 60 },
{ name: "Dumbbell Farmer's Walk", sets: 3, reps: 50, rest: 90, timePerSet: 60 }, // Estimate for distance/time
{ name: "Dumbbell Thruster Ladder", sets: 1, reps: "Ladder", rest: 120, timePerSet: 180 }, // Rough estimate
{ name: "Dumbbell Turkish Get ups", sets: 3, reps: 5, rest: 90, timePerSet: 90 },
],
gym: [
{ name: "Interval Rowing", sets: 5, reps: 500, rest: 120, timePerSet: 120 }, // Estimate time to row 500m
{ name: "High Intensity Assault Bike Intervals", sets: 6, reps: 30, rest: 60, timePerSet: 30 },
{ name: "Loaded Sled Pushes", sets: 5, reps: 50, rest: 120, timePerSet: 45 }, // Estimate for distance/time
{ name: "Ski Erg Intervals", sets: 4, reps: 40, rest: 90, timePerSet: 45 },
{ name: "VersaClimber Intervals", sets: 4, reps: 30, rest: 90, timePerSet: 45 },
],
},
},
fatloss: {
beginner: {
bodyweight: [
{ name: "Jumping Jacks", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "Squats", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
{ name: "Push ups", sets: 3, reps: 12, rest: 45, timePerSet: 25 },
{ name: "High Knees", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "Walking Lunges", sets: 3, reps: 10, rest: 30, timePerSet: 60 },
{ name: "Plank", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
],
dumbbells: [
{ name: "Dumbbell Squat to Press", sets: 3, reps: 12, rest: 45, timePerSet: 45 },
{ name: "Dumbbell Rows", sets: 3, reps: 12, rest: 45, timePerSet: 40 },
{ name: "Dumbbell Romanian Deadlifts", sets: 3, reps: 15, rest: 45, timePerSet: 60 },
{ name: "Dumbbell Thrusters", sets: 3, reps: 10, rest: 45, timePerSet: 40 },
{ name: "Dumbbell Step ups", sets: 3, reps: 10, rest: 30, timePerSet: 45 },
],
gym: [
{ name: "Treadmill Walk or Jog", sets: 1, reps: "1200 seconds", rest: 30, timePerSet: 1200 },
{ name: "Elliptical Trainer", sets: 1, reps: "1200 seconds", rest: 30, timePerSet: 1200 },
{ name: "Stationary Bike", sets: 1, reps: "1200 seconds", rest: 30, timePerSet: 1200 },
{ name: "Rowing Machine", sets: 1, reps: "900 seconds", rest: 30, timePerSet: 900 },
{ name: "Leg Press Machine", sets: 3, reps: 15, rest: 45, timePerSet: 40 },
],
},
intermediate: {
bodyweight: [
{ name: "Burpees", sets: 3, reps: 30, rest: 30, timePerSet: 60 },
{ name: "Mountain Climbers", sets: 3, reps: 30, rest: 30, timePerSet: 30 },
{ name: "Lunges", sets: 3, reps: 15, rest: 45, timePerSet: 60 },
{ name: "Jump Squats", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
{ name: "High Plank Jacks", sets: 3, reps: 20, rest: 30, timePerSet: 20 },
{ name: "Skater Jumps", sets: 3, reps: 15, rest: 30, timePerSet: 30 },
],
dumbbells: [
{ name: "Dumbbell Snatches", sets: 3, reps: 10, rest: 45, timePerSet: 45 },
{ name: "Dumbbell Push Press", sets: 3, reps: 12, rest: 45, timePerSet: 40 },
{ name: "Dumbbell Renegade Rows", sets: 3, reps: 10, rest: 45, timePerSet: 60 },
{ name: "Dumbbell Walking Lunges", sets: 3, reps: 10, rest: 30, timePerSet: 60 },
{ name: "Dumbbell Burpees", sets: 3, reps: 8, rest: 45, timePerSet: 60 },
],
gym: [
{ name: "Rowing Machine Intervals", sets: 4, reps: 500, rest: 60, timePerSet: 120 },
{ name: "Assault Bike Intervals", sets: 4, reps: 30, rest: 60, timePerSet: 30 },
{ name: "Stair Climber Intervals", sets: 4, reps: 20, rest: 60, timePerSet: 60 },
{ name: "Battle Ropes", sets: 3, reps: 30, rest: 45, timePerSet: 30 },
{ name: "Sled Push", sets: 3, reps: 20, rest: 60, timePerSet: 45 },
],
},
advanced: {
bodyweight: [
{ name: "High Intensity Burpee Variations", sets: 4, reps: 20, rest: 30, timePerSet: 45 },
{ name: "Advanced Plyometric Circuit", sets: 4, reps: 15, rest: 45, timePerSet: 60 },
{ name: "Complex Bodyweight Movements", sets: 4, reps: 10, rest: 60, timePerSet: 60 },
{ name: "Sprint Intervals", sets: 6, reps: 100, rest: 60, timePerSet: 20 }, // Assuming 100m sprint takes ~20 seconds
{ name: "Hill Sprints with Burpees", sets: 5, reps: 50, rest: 90, timePerSet: 45 }, // Estimate
],
dumbbells: [
{ name: "Dumbbell Complex Circuit", sets: 4, reps: 10, rest: 60, timePerSet: 75 },
{ name: "Dumbbell Snatch and Overhead Squat Complex", sets: 4, reps: 8, rest: 60, timePerSet: 60 },
{ name: "Dumbbell Thruster Ladder", sets: 1, reps: "Ladder", rest: 120, timePerSet: 180 }, // Rough estimate
{ name: "Dumbbell Renegade Row Complex", sets: 4, reps: 10, rest: 60, timePerSet: 75 },
{ name: "Dumbbell Turkish Get ups with Press", sets: 3, reps: 5, rest: 90, timePerSet: 90 },
],
gym: [
{ name: "HIIT on Treadmill", sets: 5, reps: 30, rest: 30, timePerSet: 30 },
{ name: "Rowing Machine Intervals", sets: 5, reps: 500, rest: 60, timePerSet: 120 },
{ name: "Kettlebell Swings", sets: 4, reps: 20, rest: 45, timePerSet: 30 },
{ name: "Assault Bike Intervals", sets: 6, reps: 30, rest: 60, timePerSet: 30 },
{ name: "Ski Erg Intervals", sets: 5, reps: 40, rest: 60, timePerSet:45 },
],
},
},
calisthenics: {
beginner: [
{ name: "Squats", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
{ name: "Lunges", sets: 3, reps: 12, rest: 60, timePerSet: 45 },
{ name: "Plank", sets: 3, reps: "30 seconds", rest: 60, timePerSet: 30 },
{ name: "Incline Push ups", sets: 3, reps: 12, rest: 60, timePerSet: 25 },
{ name: "Glute Bridges", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
{ name: "Crunches", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
{ name: "Supermans", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
{ name: "Wall Sit", sets: 3, reps: "30 seconds", rest: 60, timePerSet: 30 },
{ name: "Knee Push ups", sets: 3, reps: 15, rest: 60, timePerSet: 20 },
{ name: "Russian Twists", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
{ name: "Bird Dog", sets: 3, reps: 10, rest: 60, timePerSet: 30 },
{ name: "Calf Raises", sets: 3, reps: 15, rest: 45, timePerSet: 20 },
{ name: "Hip Thrusts", sets: 3, reps: 15, rest: 60, timePerSet: 25 },
{ name: "Reverse Crunches", sets: 3, reps: 12, rest: 60, timePerSet: 20 },
{ name: "Bodyweight Rows Inverted Rows", sets: 3, reps: 8, rest: 60, timePerSet: 40 },
{ name: "Side Plank", sets: 3, reps: "20 seconds", rest: 60, timePerSet: 20 },
{ name: "Donkey Kicks", sets: 3, reps: 15, rest: 45, timePerSet: 30 },
{ name: "Lateral Lunges", sets: 3, reps: 10, rest: 60, timePerSet: 45 },
{ name: "Bear Crawls", sets: 3, reps: 20, rest: 60, timePerSet: 45 },
{ name: "Assisted Dips", sets: 3, reps: 8, rest: 60, timePerSet: 30 },
{ name: "Band Assisted Pull ups", sets: 3, reps: 8, rest: 60, timePerSet: 40 },
{ name: "Band Assisted Dips", sets: 3, reps: 8, rest: 60, timePerSet: 30 },
{ name: "Negative Pull ups", sets: 3, reps: 5, rest: 60, timePerSet: 30 },
{ name: "Negative Dips", sets: 3, reps: 5, rest: 60, timePerSet: 30 },
{ name: "Incline Rows Assisted", sets: 3, reps: 10, rest: 60, timePerSet: 40 },
{ name: "Elevated Pike Push ups Assisted", sets: 3, reps: 8, rest: 60, timePerSet: 40 },
{ name: "Wall Assisted Handstand Holds", sets: 3, reps: "15 seconds", rest: 60, timePerSet: 15 },
{ name: "Band Assisted Squats", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
],
intermediate: [
{ name: "Pull ups", sets: 3, reps: 8, rest: 90, timePerSet: 40 },
{ name: "Dips", sets: 3, reps: 10, rest: 90, timePerSet: 40 },
{ name: "Pistol Squats", sets: 3, reps: 6, rest: 90, timePerSet: 60 },
{ name: "Handstand Practice", sets: 3, reps: "30 seconds", rest: 90, timePerSet: 30 },
{ name: "Archer Push ups", sets: 3, reps: 6, rest: 90, timePerSet: 45 },
{ name: "Australian Pull ups", sets: 3, reps: 12, rest: 60, timePerSet: 40 },
{ name: "L-Sit Holds", sets: 3, reps: "20 seconds", rest: 90, timePerSet: 20 },
{ name: "Elevated Pike Push ups", sets: 3, reps: 8, rest: 90, timePerSet: 45 },
{ name: "Jump Squats", sets: 3, reps: 10, rest: 60, timePerSet: 30 },
{ name: "Close Grip Push ups", sets: 3, reps: 12, rest: 60, timePerSet: 30 },
{ name: "Weighted Dips Light", sets: 3, reps: 6, rest: 90, timePerSet: 40 },
],
advanced: [
{ name: "Front Lever", sets: 3, reps: "15 seconds", rest: 120, timePerSet: 15 },
{ name: "One Arm Pull ups", sets: 3, reps: 3, rest: 120, timePerSet: 60 },
{ name: "Planche", sets: 3, reps: "10 seconds", rest: 120, timePerSet: 10 },
{ name: "One Arm Handstand Push ups", sets: 3, reps: 3, rest: 120, timePerSet: 90 },
{ name: "Victorian Cross", sets: 3, reps: "5 seconds", rest: 180, timePerSet: 5 },
{ name: "Human Flag", sets: 3, reps: "5 seconds", rest: 180, timePerSet: 5 },
{ name: "90 Degree Push ups", sets: 3, reps: 5, rest: 120, timePerSet: 45 },
{ name: "Back Lever", sets: 3, reps: "10 seconds", rest: 120, timePerSet: 10 },
{ name: "Weighted Pull ups", sets: 4, reps: 5, rest: 120, timePerSet: 60 },
{ name: "Weighted Dips", sets: 4, reps: 8, rest: 120, timePerSet: 45 },
{ name: "Weighted Pistol Squats", sets: 3, reps: 5, rest: 120, timePerSet: 75 },
{ name: "Weighted Archer Pull ups", sets: 3, reps: 4, rest: 120, timePerSet: 60 },
{ name: "Weighted Australian Pull ups", sets: 3, reps: 10, rest: 90, timePerSet: 45 },
{ name: "Weighted L Sit Holds", sets: 3, reps: "15 seconds", rest: 120, timePerSet: 15 },
{ name: "Weighted Pike Push ups", sets: 3, reps: 6, rest: 120, timePerSet: 45 },
{ name: "Weighted Close Grip Push ups", sets: 3, reps: 10, rest: 90, timePerSet: 30 },
{ name: "Weighted Back Lever Pulls", sets: 3, reps: 5, rest: 120, timePerSet: 60 },
],
},
powerlifting_5x5: {
beginner: [
{ name: "Barbell Squats", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
{ name: "Barbell Bench Press", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
{ name: "Barbell Rows", sets: 5, reps: 5, rest: 180, timePerSet: 60 },
{ name: "Overhead Press", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
{ name: "Romanian Deadlifts", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
{ name: "Front Squats", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
{ name: "Incline Barbell Bench Press", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
{ name: "Pendlay Rows", sets: 5, reps: 5, rest: 180, timePerSet: 60 },
{ name: "Arnold Press", sets: 3, reps: 8, rest: 120, timePerSet: 50 },
{ name: "Good Mornings", sets: 3, reps: 8, rest: 120, timePerSet: 45 },
{ name: "Paused Squats", sets: 5, reps: 5, rest: 180, timePerSet: 90 },
{ name: "Decline Barbell Bench Press", sets: 5, reps: 5, rest: 180, timePerSet: 75 },
{ name: "Chest Supported Rows", sets: 5, reps: 5, rest: 180, timePerSet: 60 },
{ name: "Lateral Raises", sets: 3, reps: 10, rest: 120, timePerSet: 30 },
{ name: "Glute Bridges", sets: 3, reps: 12, rest: 90, timePerSet: 25 },
],
intermediate: [
{ name: "Barbell Squats", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Barbell Bench Press", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Barbell Rows", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Barbell Overhead Press", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Deadlifts", sets: 1, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Pull ups", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 60 },
{ name: "Front Squats", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Incline Barbell Bench Press", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Pendlay Rows", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Push Press", sets: 5, reps: 5, rest: 240, timePerSet: 60 },
{ name: "Sumo Deadlifts", sets: 1, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Dips", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 45 },
{ name: "Paused Squats", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
{ name: "Decline Barbell Bench Press", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Chest Supported Rows", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Behind the Neck Press", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Snatch Grip Deadlifts", sets: 1, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Weighted Pull ups", sets: 3, reps: 5, rest: 180, timePerSet: 75 },
],
advanced: [
{ name: "Barbell Squats", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
{ name: "Barbell Bench Press", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
{ name: "Barbell Rows", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Barbell Overhead Press", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Deadlifts", sets: 1, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Weighted Pull ups", sets: 3, reps: 5, rest: 180, timePerSet: 90 },
{ name: "Weighted Dips", sets: 3, reps: 5, rest: 180, timePerSet: 60 },
{ name: "Front Squats", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
{ name: "Incline Barbell Bench Press", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
{ name: "Pendlay Rows", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Push Press", sets: 5, reps: 5, rest: 240, timePerSet: 75 },
{ name: "Sumo Deadlifts", sets: 1, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Romanian Deadlifts", sets: 3, reps: 8, rest: 120, timePerSet: 75 },
{ name: "Muscle Ups", sets: 3, reps: "AMRAP", rest: 180, timePerSet: 75 },
{ name: "Paused Squats", sets: 5, reps: 5, rest: 240, timePerSet: 120 },
{ name: "Decline Barbell Bench Press", sets: 5, reps: 5, rest: 240, timePerSet: 105 },
{ name: "Chest Supported Rows", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Behind the Neck Press", sets: 5, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Snatch Grip Deadlifts", sets: 1, reps: 5, rest: 240, timePerSet: 90 },
{ name: "Good Mornings", sets: 3, reps: 8, rest: 120, timePerSet: 60 },
{ name: "Weighted Pull ups", sets: 3, reps: 5, rest: 180, timePerSet: 90 },
],
},
hiit: {
beginner: [
{ name: "Jumping Jacks", sets: 5, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "High Knees", sets: 5, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "Butt Kicks", sets: 5, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "Mountain Climbers", sets: 5, reps: "20 seconds", rest: 40, timePerSet: 20 },
{ name: "Squats", sets: 5, reps: "20 seconds", rest: 40, timePerSet: 20 },
{ name: "Push ups on Knees", sets: 5, reps: "20 seconds", rest: 40, timePerSet: 20 },
],
intermediate: [
{ name: "Burpees", sets: 6, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "Mountain Climbers", sets: 6, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "Jump Squats", sets: 6, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "Push ups", sets: 6, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "High Knees", sets: 6, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "Plank Jacks", sets: 6, reps: "30 seconds", rest: 30, timePerSet: 30 },
],
advanced: [
{ name: "Burpees", sets: 8, reps: "40 seconds", rest: 20, timePerSet: 40 },
{ name: "Box Jumps", sets: 8, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "Thrusters", sets: 8, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "Sprints on the Spot", sets: 8, reps: "30 seconds", rest: 30, timePerSet: 30 },
{ name: "Pull ups", sets: 8, reps: "20 seconds", rest: 40, timePerSet: 20 },
{ name: "Dips", sets: 8, reps: "20 seconds", rest: 40, timePerSet: 20 },
],
},
circuit: {
beginner: [
{ name: "Squats", sets: 3, reps: 10, rest: 10, timePerSet: 30 },
{ name: "Push ups", sets: 3, reps: 8, rest: 10, timePerSet: 25 },
{ name: "Lunges", sets: 3, reps: 10, rest: 10, timePerSet: 45 },
{ name: "Plank", sets: 3, reps: "30 sec", rest: 10, timePerSet: 30 },
{ name: "Jumping Jacks", sets: 3, reps: 20, rest: 10, timePerSet: 20 },
{ name: "Crunches", sets: 3, reps: 15, rest: 10, timePerSet: 20 },
],
intermediate: [
{ name: "Burpees", sets: 4, reps: 10, rest: 10, timePerSet: 45 },
{ name: "Pull ups", sets: 4, reps: 5, rest: 10, timePerSet: 30 },
{ name: "Dips", sets: 4, reps: 8, rest: 10, timePerSet: 30 },
{ name: "Jump Squats", sets: 4, reps: 12, rest: 10, timePerSet: 30 },
{ name: "Mountain Climbers", sets: 4, reps: 20, rest: 10, timePerSet: 20 },
{ name: "Kettlebell Swings", sets: 4, reps: 15, rest: 10, timePerSet: 30 },
],
advanced: [
{ name: "Muscle Ups", sets: 5, reps: 3, rest: 10, timePerSet: 60 },
{ name: "Pistol Squats", sets: 5, reps: 5, rest: 10, timePerSet: 60 },
{ name: "Handstand Push ups", sets: 5, reps: 3, rest: 10, timePerSet: 60 },
{ name: "Box Jumps", sets: 5, reps: 10, rest: 10, timePerSet: 30 },
{ name: "Thrusters", sets: 5, reps: 10, rest: 10, timePerSet: 45 },
{ name: "Barbell Complexes", sets: 5, reps: 5, rest: 10, timePerSet: 90 },
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
        return {
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps,
            rest: exercise.rest,
            timePerSet: exercise.timePerSet // Include the new field
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
            if (typeof ex.sets === 'number') {
                totalWorkoutTime += (ex.sets - 1) * ex.rest; // Rest between sets
            }
        }

        if (ex.timePerSet !== undefined) {
            workoutHTML += ` - Time per set: ${ex.timePerSet} seconds`;
            workoutTextForCopy += ` - Time per set: ${ex.timePerSet} seconds`;
            if (typeof ex.sets === 'number') {
                let numberOfRounds = ex.sets;
                // For reps that are time-based, sets might represent rounds
                if (typeof ex.reps === 'string' && (ex.reps.includes('sec') || ex.reps.includes('minutes'))) {
                    numberOfRounds = ex.sets;
                } else if (typeof ex.reps === 'string' && (ex.reps === 'AMRAP' || ex.reps === 'Ladder')) {
                    numberOfRounds = ex.sets; // Treat AMRAP/Ladder sets as rounds
                } else if (typeof ex.reps === 'number') {
                    numberOfRounds = ex.sets;
                }
                totalWorkoutTime += numberOfRounds * ex.timePerSet;
            }
        }

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
        // Insert "TPS" before "Rest" in the headers
        let headers = ["Exercise", "Reps", "TPS", "Rest", "Set 1", "Set 2", "Set 3", "Set 4", "Set 5", "Set 6", "Set 7", "Set 8"];
        let totalWorkoutTime = 0;

        lines.forEach(line => {
            if (line.trim() && !line.includes("Estimated Workout Time")) {
                const exerciseMatch = line.match(/^(.+?) - Reps:/);
                const repsMatch = line.match(/Reps: (.+?)(?: - Time per set: (.+?) (seconds?|minutes?))?(?: - Rest: (.+?) (seconds?|minutes?))?\s*$/);
                const timePerSetMatch = line.match(/Time per set: (.+?) (seconds?|minutes?)?/);
                const restMatch = line.match(/Rest: (.+?) (seconds?|minutes?)?/);

                if (exerciseMatch) {
                    const exerciseName = exerciseMatch[1].replace(/<b>|<\/b>/g, '').trim();
                    const repsInfo = repsMatch ? repsMatch[1].trim() : "";
                    const tpsInfo = repsMatch && repsMatch[2] ? repsMatch[2].trim() : "";
                    const restInfo = repsMatch && repsMatch[4] ? repsMatch[4].trim() : "";

                    // Add data in the new order
                    tableData.push([exerciseName, repsInfo, tpsInfo, restInfo, "", "", "", "", "", "", "", ""]);
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
                2: { cellWidth: 'auto' }, // Style for TPS column
                3: { cellWidth: 'auto' }, // Style for Rest column (shifted)
                4: { cellWidth: 'auto' },
                5: { cellWidth: 'auto' },
                6: { cellWidth: 'auto' },
                7: { cellWidth: 'auto' },
                8: { cellWidth: 'auto' },
                9: { cellWidth: 'auto' },
                10: { cellWidth: 'auto' },
                11: { cellWidth: 'auto' },
            },
            tableLineWidth: 1,
            tableBorderColor: [169, 169, 169],
        });

        const tableEndY = doc.autoTable.previous.finalY;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(105, 105, 105);
        const timeLine = lines.find(line => line.includes("Estimated Workout Time"));
        const timeText = timeLine || "";
        doc.text(timeText, 10, tableEndY + 10);
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
            copyText += ` - Rest: ${exercise.rest} seconds.`;
        }
        if (exercise.timePerSet !== undefined) {
            copyText += ` - Time per set: ${exercise.timePerSet} seconds.`;
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

        const cell7 = document.createElement("td");
        cell7.textContent = exercise.timePerSet || ''; // Display time per set

        row.appendChild(cell1);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
        row.appendChild(cell7);

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
document.addEventListener('DOMContentLoaded', function() {
    populateExerciseTable();
});
