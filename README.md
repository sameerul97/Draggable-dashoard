# Draggable-dashoard.io
Javascript draggable dashboard.
Used Interact JS library to implement draggable feature.
<!-- A draggable dashboard feature which allows clinicians to customize the home layout for individual patients.  -->
# Purpose of this application 
Purpose of this dashboard is to help clinican to control over thier patient home page content. 

# How to use it? 
Drag a widgets from the widget panel and drop into the patient view.
On dropping the widget, widget will be loaded. 

# How to remove a widget ? 
Simply drag back the widget away from the patient view and the widget will be loaded back to widget panel list.  

# Navigation button
Application gives the option to tick which navigation button should be visible to patient as well colour picker functionality. Colours listed as per accessbility guide from WCAG. Colours for each button can be assigned.  

# How the widgets are stored in Database ?
Current version is simplied from the original version due to privacy policy. Original version of this application includes an submit button next to preview button. Upon clicking the sumbit function behind identifies list of widgets inside patient view. Calculates the X and Y cordinates as well as its height and width for each widget which are placed in patient view. 
Navigation button which are selected and the colours assigned for that specific button is identified and sent to database.  

# How is widgets retrieved and displayed without dragging in?

Widgets can be already assigned and the clinican might just want to update. Upon the initial loading function checks the what information are sent to the application based on checking and if there is a ID present of 

# Does it save to database in current live version ? 
No, current version is simplied from the origional version due to privacy policy. Current version prints out log statements of the data which needs to be sent to backend. Log statements contains X and Y cordinates,widgets which are selected along with button and colours assigned with each button. 

# Bugs
When resizing widget buttons it comes unresponsive. Currently, enales doubt tap feature to that widgets which reloads the widget in exact position.  

# Demo : https://sameerul97.github.io/Draggable-dashoard.io/
