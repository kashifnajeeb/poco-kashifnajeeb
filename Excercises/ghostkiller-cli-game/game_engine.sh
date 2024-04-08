#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Function to display available commands
display_commands() {
    echo "Available commands:"
    echo "  cd <room_name>"
    echo "  ls"
    echo "  cat <room_name>"
}

# Function to display room contents
display_room_contents() {
    local room_file="$1"
    if [ -e "$room_file" ]; then
        cat "$room_file"
    else
        echo "Room not found."
    fi
}

# Main game loop
echo "Welcome to Mr. Brave's Adventure!"
echo "You have 1 minute to save your children from the Ghost."
echo "Type 'help' for instructions."
current_time=$(date +%s)
end_time=$((current_time + 60))  # Two minutes from now

previous_room=""
current_room="$SCRIPT_DIR/rooms"

while true; do
    if [ $(date +%s) -ge $end_time ]; then
        echo "Time's up! Mr. Brave failed to save his children."
        exit 1
    fi
    
    read -p "> " command arg
    
    case "$command" in
        "cd")
            if [ -d "$current_room/$arg" ]; then
                current_room="$current_room/$arg"
                echo "Entered room: $arg"
            else
                echo "Directory not found: $arg"
            fi
            ;;
        "ls")
            ls "$current_room/$arg"
            ;;
        "cat")
            room_file="$current_room/$arg"
            if [ -e "$room_file" ]; then
                cat "$room_file"
                if grep -q "Trap: Game Over!" "$room_file"; then
                    exit 1
                fi
                  if grep -q "Ghost Encounter: Congratulations! You Won. You save the children." "$room_file"; then
                    exit 1
                fi
            else
                echo "Room not found."
            fi
            ;;
        "help")
            display_commands
            ;;
        "")
            echo "Invalid command. Type 'help' for instructions."
            ;;
    esac
done
