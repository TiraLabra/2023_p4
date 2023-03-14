---
layout: info
title:  "Documentation"
categories: jekyll update
tag: info
permalink: /en/documentation/
---

**Note:** all documentation is to be submitted to git as [markdown](https://github.com/github/markup) documents! All documents should be in a separate folder at the root of the repository.

Besides the code, weekly reports and code reviews you need to create four documents: the specification, implementation and testing documents as well as a user guide. Compared to some other courses, the importance of the documentation is a bit less. Focus is on efficient and good code.

Each document should be approximately 1 to 2 A4 pages in length, disregarding images and tables (the actual length may be significantly more than 2 pages).

## Required documentations:

#### Project specification
* What data structures and algorithms will you be using
* What problem are you solving and why did you chose these specific data structures and algorithms
* What is the program input and how will it be used
* Expected time and space complexities of the program (big-O notations)
* Sources
* Due to administrative practicalities you should also mention your degree programme in the Project Specification. For example, bachelor's in computer science (CS) or bachelor's in science (bSc)
* You should also mention the documentation language you are going to use and have all code, comments and documentation written in this language. Typically Finnish or English. This requirement is due to the code reviews done around the half way point of the course. This hopefully helps keep the internal language of the project consistent.

#### Implementation document
* Project structure
* Implemented time and space complexities (big-O complexity analysis of (pseudo)code)
* Comparative performance and complexity analysis if applicable
* Possible flaws and improvements
* Sources

#### Testing document
* What has been tested and how
* What types of input were used (especially important for comparative analysis)
* How can the tests be repeated
* Results of empirical testing presented in graphical form
* Tests should ideally be a runnable program. This makes repeating the tests easy
* For Java it is recommended to do unit testing with JUnit

#### User guide
* How is the program executed. How do different features work
* What kind of input does the program support
* Where can the executable be found and where can required files be found


Compared to other project works, documentation of the code is not very highly prioritized for the Data Structures and Algorithms project. However the code should be as clear as possible, the methods short and naming intuitive. The same applies to the project structure.

The code should be as clear and understandable as possible. Add comments to your code comprehensively. Every class, method, and attribute does not necessarily require commenting, but everything essential and possibly confusing should be accounted for in comments. For method comments you should include parameter definitions and a definition for the return value. Generally very little internal commenting of methods should be needed due methods being intuitively named, compact and simple. However, if the workings of a method is not clear, some comments may be required.

For any work done in Java, JavaDoc comments will be used. NetBeans can create Javadoc templates for methods and classes. If you are doing the project in another language you will have to discuss specific requirements for documentation with the course assistant. Class diagrams for Java can for instance be created using a tool called YWorks.
