<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$servername = "localhost:3306";
$username = "root";
$password = "1234";
$dbname = "all_in_one_cleaning_service";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Capture POST data
$name = isset($_POST['name']) ? $_POST['name'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$phone = isset($_POST['phone']) ? $_POST['phone'] : null;
$city = isset($_POST['city']) ? $_POST['city'] : null;
$service = isset($_POST['service']) ? $_POST['service'] : null;

// Validate POST data
if (!$name || !$email || !$phone || !$city || !$service) {
  die("All fields are required.");
}

// Insert data into database
$sql = "INSERT INTO bookings (name, email, phone, city, service) VALUES ('$name', '$email', '$phone', '$city', '$service')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
