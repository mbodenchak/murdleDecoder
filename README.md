# MURDLE DECODER

I got tired of constantly flipping back to look at Exhibit A in my murdle book, so I wrote this simple script to help decode it. For reference, the cipher works as follows:

**Decoded**
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Z Y X W V U T S R Q P O N M L K J I H G F E D C B A 
**Encoded**

The script prompts you to type in the encoded format, then subtracts the value from 219 to get the character value while preserving spaces from the input. 

Run it with `node detectiveCode.js` in your terminal. Nothing fancy.