<h1>PHP</h1>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function run_command($cmd){
	echo $cmd;
	echo "<pre>";
		echo shell_exec($cmd);
	echo "</pre>";
}

	run_command("echo \$USER");
	#run_command("date > test 2>&1");
	run_command("git branch deploy 2>&1");
	run_command("git checkout deploy 2>&1");
	#run_command("pwd");
	run_command("git fetch --all 2>&1");
	run_command("git reset --hard origin/master 2>&1");

?>
