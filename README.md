<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clinic Website</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #ffffff;
      color: #000;
    }

    /* Top bar */
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      background-color: #e6f4e6; /* pale green */
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .top-bar a {
      text-decoration: none;
      color: #000;
      font-weight: bold;
      padding: 8px 14px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      background-color: #c8e6c9; /* slightly deeper pale green */
    }

    .top-bar a:hover {
      background-color: #b2d8b3;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 20px;
      background-color: #e6f4e6;
    }

    .header img {
  height: 48px;
  width: 48px;
  object-fit: cover;
  border-radius: 50%;
}

    .header h1 {
      font-size: 26px;
      color: #000;
      margin: 0;
      font-weight: bold;
    }

    .main-image {
      width: 100%;
      height: auto;
    }

    .services {
      padding: 30px 20px;
    }

    .services h2 {
      text-align: center;
      color: #000;
      background-color: #e6f4e6;
      display: inline-block;
      padding: 6px 14px;
      border-radius: 8px;
    }

    .service-list {
      margin-top: 15px;
      list-style-type: square;
      font-weight: bold;
    }

    .service-description {
      margin-top: 30px;
      line-height: 1.6;
      font-size: 15px;
    }

    .icon {
      width: 18px;
      height: 18px;
    }
  </style>
</head>
<body>

  <!-- Top bar with buttons -->
  <div class="top-bar">
    <a href="tel:+256769616091">
      📞 Call Us
    </a>
    <a href="https://wa.me/256740166778" target="_blank">
      💬 Message Us
    </a>
  </div>

  <!-- Header with logo and clinic name -->
  <div class="header">
    <img src="https://raw.githubusercontent.com/Fadjum/index.html/f518c4c36f248bec715d42c160fec4068cc7a215/file_00000000398861f891d77ab42db18689%20(1).png" alt="Clinic Logo">
    <h1>Your Clinic Name Here</h1>
  </div>

  <!-- Main ENT image -->
  <img class="main-image" src="https://raw.githubusercontent.com/Fadjum/index.html/0723b694988e6a5d2730ee4d8b1bae67ce2721aa/images%20(41).jpeg" alt="ENT Main Image">

  <!-- Services Section -->
  <section class="services">
    <h2>Our Services</h2>
    <ul class="service-list">
      <li>Ear Cleaning & Wax Removal</li>
      <li>Hearing Assessment</li>
      <li>Sinus & Allergy Management</li>
      <li>Tonsil & Throat Treatment</li>
      <li>Nasal Obstruction Evaluation</li>
      <li>ENT Consultations</li>
    </ul>

    <!-- Detailed Descriptions Placeholder -->
    <div class="service-description">
      <p><strong>Ear Cleaning & Wax Removal:</strong> Detailed description will go here...</p>
      <p><strong>Hearing Assessment:</strong> Detailed description will go here...</p>
      <p><strong>Sinus & Allergy Management:</strong> Detailed description will go here...</p>
      <p><strong>Tonsil & Throat Treatment:</strong> Detailed description will go here...</p>
      <p><strong>Nasal Obstruction Evaluation:</strong> Detailed description will go here...</p>
      <p><strong>ENT Consultations:</strong> Detailed description will go here...</p>
    </div>
  </section>

</body>
</html>
