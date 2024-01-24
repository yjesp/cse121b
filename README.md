<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Me | CSE 121b | W02: Programming Tasks</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="styles/main.css">
</head>

<body>
  <nav>
    <ul id="menu">
      <li><a id="toggleMenu">&equiv;</a></li>
      <li><a href="index.html" class="active">Home</a></li>
      <li><a href="w01-task.html">W1 Task</a></li>
      <li><a href="w03-task.html">W3 Task</a></li>
      <li><a href="w04-task.html">W4 Task</a></li>
      <li><a href="w05-task.html">W5 Task</a></li>
      <li><a href="project.html">Project</a></li>
    </ul>
  </nav>
  <main id="home">
    <picture>
      <img src="images/placeholder.png" alt="Placeholder Image">
    </picture>
    <section>
      <h1>About Me</h1>
      <div class="info">Name: <span id="name"></span></div>
      <h2>Favorite Food</h2>
      <div class="block" id="food"></div>
    </section>
  </main>
  <footer>
    &copy;<span id="year"></span> | About Me | CSE 121b
  </footer>
  <script src="scripts/main.js"></script>
  <script src="scripts/w02-task.js"></script>

</body>

</html>
