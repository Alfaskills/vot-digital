<?php
$servername = "voturi";
$username = "root";
$password = "christian";
$dbname = "voturi";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the selected option
$option = $_POST['vot'];

// Update the database
$sql = "UPDATE your_table SET votes = votes + 1 WHERE option = '$option'";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
