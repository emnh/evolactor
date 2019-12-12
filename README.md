# evolactor
Next attempt at append-only language

# Vectors of change
 - Computer program is a model.
 - Computer program changes its environment by running code.
 - Coder changes the program, the model, to change the environment.
 - Modelling changes to the program as append-only changes makes the coder
   focused on change. So the program will be easier to modify in the future.
   Programs are explicitly written for evolution.
 - Being able to read the model and understand it, globally and locally, is
   necessary for efficiently creating useful vectors of change, but the experimentalist
   model also applies to a certain extent.
 - It's nice to know which line of code is responsible for a certain pixel,
   i.e. a 2-way mapping between the environment and code. But imagine complex
   scenarios, like rendered water. A lot of code goes into it. Many lines are responsible.
 - Is it possible to embed the code in a 3D world for better intuitive play?
  - Blocks with symbols on them?
  - How to put blocks together?
 - What about copy-pasting code? Can we translate automatically to a change-based model?
 - Number of objects that can be held in memory is 7 +- 2 according to:
   https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two.
   So we will use 7 as hard limit for context and beyond that hierarchies or visualizations.

# graphics-project
A random graphics project, basis for exploration
 - Idempotent hot reload?
 - Reactive programming?
 - Automated inversion of control, computable dependencies?
 - Literate programming?
 - Tree shaking?
