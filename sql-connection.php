<?php
// Connect to the database using your credentials
$servername = "localhost"; // Change this to your server name
$username = "root"; // Change this to your username
$password = ""; // Change this to your password
$dbname = "vot_romania"; // Change this to your database name

// Create a connection object
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection status
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
<?php
// Write a SQL query to select the data from the table
$sql = "SELECT * FROM candidati"; // Change this to your table name and columns
$result = $conn->query($sql); // Execute the query and store the result
?>
