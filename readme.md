<Project Name : Digital Converter >

<Here I'm attaching my notes about the learning and understanding I achieved during this entire project.>

1. References I used :
     A. MDN Web Docs
          (i) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
          (ii) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
     
     B. JavaScript.info site
          (i)  https://javascript.info/number

     C. Wikipedia
          (i)  https://en.wikipedia.org/wiki/Decimal_separator#Radix_point
          (ii) https://en.wikipedia.org/wiki/Double-precision_floating-point_format
     
     D. Educba Site
          (i)  https://www.educba.com/javascript-literals/

     E. Cuemath Site
          (i)  https://www.cuemath.com/numbers/number-systems/

     F. w3schools site
          (i)  https://www.w3schools.com/jsref/jsref_number.asp
          (ii) https://www.w3schools.com/jsref/jsref_isnan.asp
          (iii)https://www.w3schools.com/jsref/jsref_parseint.asp
          (iv) https://www.w3schools.com/jsref/jsref_tostring_string.asp

      

--------------------------------------------------------------------------------------------------------------------------------

     
          *--> What I learned from here:

               (a)  Radix -->
                      *  The base of each number system is also called the radix. The radix of a  decimal number is ten, and the radix of binary is two. The radix determines how many different symbols are required in order to flesh out a number system.
                      
                      *  The base can vary from 2 to 36. By default it’s 10.

                      *  Thrown if radix is less than 2 or greater than 36.

               (b)  Number -->
                      * In JavaScript, numbers are implemented in double-precision 64-bit binary format IEEE 754 (i.e., a number between ±2^−1022 and ±2^+1023, or about ±10^−308 to ±10^+308, with a numeric precision of 53 bits). Integer values up to ±2^53 − 1 can be represented exactly.
                      
                      * Double-precision floating-point format (sometimes called FP64 or float64) is a floating-point number format, usually occupying 64 bits in computer memory.

               (c)  JavaScript Literals -->
                      * JavaScript Literals are constant values that can be assigned to the variables that are called literals or constants.

                      Note : For this project I only needed for the numeric or integer literals so I only discussed about it here

               (d)  Numeric or integer literals -->
                      * Integer literals are numbers, must have minimum one digit (0-9). No blank or comma is allowed within an integer. It can store positive numbers or negative numbers. In integers, literals in JavaScript can be supported in three different bases. The base 10 that is Decimal (Decimal numbers contain digits (0,9) ) examples for Decimal numbers are 234, -56, 10060. Second is base 8 that is Octal (Octal numbers contains digits (0,7) and leading 0 indicates the number is octal), 0X 073, -089, 02003. Third is base 16 that is Hexadecimal numbers (Hexadecimal numbers contains (0,9) digits and (A,F) or (a, f) letters and leading 0x or 0X indicates the number is hexadecimal), examples for hexadecimal numbers are 0X8b, – 0X89, 0X2003.

               (e)  Types of number literals --> decimal, binary, octal, and hexadecimal.
                      * DECIMAL (Base 10) -->

                         -> Decimal number system is the number system we use every day and uses digits from 0 - 9 i.e. 0, 1, 2, 3, 4, 5, 6, 7, 8, & 9. The base number of the decimal number system is 10 as the total number available in this number system is 10. If any number is represented without a base, it means that its base is 10.

                      * Binary (Base 2) -->

                         -> "Bi" in Binary means "two". Hence, this draws back the line to the representation of a number in terms of 0 and 1 only.
                         -> Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (0b or 0B).

                      * Octal (Base 8) -->

                         -> A number system with its base as eight and uses digits from 0 to 7 is called Octal Number System. The word octal is used to represent the numbers that have eight as the base.
                         -> The standard syntax for octal numbers is to prefix them with 0o.

                      * Hexadecimal (Base 16) -->

                         -> The word hexadecimal can be divided into 'Hexa' and 'deci', where 'Hexa' means 6 and 'deci' means 10. The hexadecimal number system is described as a 16 digit number representation of numbers from 0 - 9 and digits from A - F.
                         -> Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (0x or 0X).

                         Note : number literals prefixed with 0, whether interpreted as octal or decimal, will cause a syntax error in strict mode — so, use the 0o prefix instead.

               (f)  Some important methods I've used in this project -->
                      * Number() -->
                         -> Syntax : Number(value)
                            Returns the value as a number.
                            If the value cannot be converted to a number, NaN is returned.
                            If no value is provided, 0 is returned.
                      * isNaN() -->
                         -> Syntax : isNaN(value)
                            NaN is short for "Not-a-Number".
                            The isNaN() method returns true if a value is NaN.
                            The isNaN() method converts the value to a number before testing it.
                      * parseInt() -->
                         -> Syntax : parseInt(string, radix)
                            The parseInt method parses a value as a string and returns the first integer.
                            A radix parameter specifies the number system to use:
                            2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
                            If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.
                      * toString() -->
                         -> Syntax : string.toString()
                            Returns a string as a string.
                            Does not change the original string.
                            Can be used to convert a string object into a string.
                      * parseInt().toString() -->
                         -> Syntax : parseInt(string, ?radix).toString(?radix)
                            If you have a string representing a number in a non-decimal radix, you can use parseInt() and toString() to convert it to a different radix.
                            (parseInt('1111', 2)).toString(16); // 'f'
                    
