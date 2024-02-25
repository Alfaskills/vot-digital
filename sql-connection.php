<?php
// Replace with your actual database connection details
$hostname = 'localhost';
$username = 'root';
$password = '';
$database = 'mysql';

// Connect to the database
$conn = mysqli_connect($hostname, $username, $password, $database);

// Check if data is already in the table
if (isset($_POST['data'])) {
  $data = $_POST['data'];

  // Sanitize and validate user input to prevent SQL injection
  // ... (implement appropriate sanitization and validation based on data type)


  // Execute the query
  $stmt->execute();

  // Check if any rows were found
  $result = $stmt->rowCount();
 
 
  if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
} else {
    echo 'Connected successfully';
}
}
