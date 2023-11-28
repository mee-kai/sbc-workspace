use std::io;

fn count_vowels(input: &str) -> usize {
    let vowels = "aeiouAEIOU";
    input.chars().filter(|c| vowels.contains(*c)).count()
}

fn main() {
    println!("Enter a string:");

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    let num_vowels = count_vowels(&input);

    println!("Number of vowels: {}", num_vowels);
}
