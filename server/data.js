
const ELAK = [{standard: 'RL.K.1' , description: 'With prompting and support, ask and answer questions about key details in a text.'}, {standard: 'RL.K.2' , description: 'With prompting and support, retell familiar stories, including key details.'}, {standard: 'RL.K.3' , description: 'With prompting and support, identify characters, settings, and major events in a story.'}, {standard: 'RL.K.4' , description: 'Ask and answer questions about unknown words in a text.'}, {standard: 'RL.K.5' , description: 'Recognize common types of texts (e.g., storybooks, poems).'}]

const MATK = [{standard: 'K.CC.A.1' , description: 'Count to 100 by ones and by tens.'}, {standard: 'K.CC.A.2' , description: 'Count forward beginning from a given number within the known sequence (instead of having to begin at 1).'}, {standard: 'K.CC.A.3' , description: 'Write numbers from 0 to 20. Represent a number of objects with a written numeral 0-20 (with 0 representing a count of no objects).'}, {standard: 'K.CC.B.4' , description: 'Understand the relationship between numbers and quantities; connect counting to cardinality.'}, {standard: 'K.CC.B.5' , description: 'Count to answer "how many?" questions about as many as 20 things arranged in a line, a rectangular array, or a circle, or as many as 10 things in a scattered configuration; given a number from 1-20, count out that many objects.'}]

const ELA1 = [{standard: 'RL.1.1' , description: 'Ask and answer questions about key details in a text.'}, {standard: 'RL.1.2' , description: 'Retell stories, including key details, and demonstrate understanding of their central message or lesson.'}, {standard: 'RL.1.3' , description: 'Describe characters, settings, and major events in a story, using key details.'}, {standard: 'RL.1.4' , description: 'Identify words and phrases in stories or poems that suggest feelings or appeal to the senses.'}, {standard: 'RL.1.5' , description: 'Explain major differences between books that tell stories and books that give information, drawing on a wide reading of a range of text types.'}]

const MAT1 = [{standard: '1.OA.A.1' , description: 'Use addition and subtraction within 20 to solve word problems involving situations of adding to, taking from, putting together, taking apart, and comparing, with unknowns in all positions, e.g., by using objects, drawings, and equations with a symbol for the unknown number to represent the problem.'}, {standard: '1.OA.A.2' , description: 'Solve word problems that call for addition of three whole numbers whose sum is less than or equal to 20, e.g., by using objects, drawings, and equations with a symbol for the unknown number to represent the problem.'}, {standard: '1.OA.B.3' , description: 'Apply properties of operations as strategies to add and subtract.'}, {standard: '1.OA.B.4' , description: 'Understand subtraction as an unknown-addend problem. For example, subtract 10 - 8 by finding the number that makes 10 when added to 8.'}, {standard: '1.OA.C.5' , description: 'Relate counting to addition and subtraction (e.g., by counting on 2 to add 2).'}]

const K = {ELA: ELAK, MATH: MATK}

const FIRST = {ELA: ELA1, MATH: MAT1}

export const data = {kindergarten: K, first: FIRST}
