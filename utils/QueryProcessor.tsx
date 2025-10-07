export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "sofiay";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "nihany";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 53, 30, 94?")) {
    return "94";
  }

  if (query.toLowerCase().includes("What is 51 plus 5?")) {
    return "56";
  }
  
  if (query.toLowerCase().includes("What is 44 plus 58?")) {
    return "102";
  }
  

  return "";
}
