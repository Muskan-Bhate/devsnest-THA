/*Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];*/
var library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

function display(obj) 
{
    var output = "";
    for (var i = 0; i < obj.length; i++)
     {
        if (obj[i].readingStatus)
        {
            output += "Book read : " + obj[i].title + " by " + obj[i].author + "\n";
        }
        else 
        {
            output += "Yet to read : " + obj[i].title + " by " + obj[i].author;
        }
    }
    return output;
}
var result = display(library);
console.log(result);