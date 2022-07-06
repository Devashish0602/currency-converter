import java.awt.*;
import javax.swing.*;
import java.text.*;
import java.awt.event.*;
import java.lang.*;




public class Currency extends JApplet implements ActionListener  
{
       
       //Decimal format method.  Used instead of Math.round()  for rounding answer to two decimal places.
       DecimalFormat twoDigits = new DecimalFormat("$#,000.00");
       
       //Declare the global vars for math
       double Converter1 = 11.2;
       double Converter2 = 1.3;

       


        //Create the UI of the applet.  America, Euro, and Mexico labels, and inputs, and one convert button.
        JTextField txtAmerica = new JTextField(10);
        JTextField txtMexico = new JTextField(10);
        JTextField txtEuro = new JTextField(10);
        JLabel lblTitle = new JLabel("Currency Converter beta V1.0");
        JLabel lblAmerica = new JLabel("American Currency");
        JLabel lblMexico = new JLabel ("Mexican Pesos      ");
        JButton btnConvert = new JButton ("Convert Currency");
        JButton btnClear = new JButton ("Clear all fields");
        JLabel lblEuro = new JLabel("Euro Amount         ");
        JLabel lblIdiotUser5 = new JLabel("Click 'Clear all fields' to clear all fields");
        JButton btnEnglish = new JButton("English");
        JButton btnGerman = new JButton("Deutsch");
        JButton btnSpanish = new JButton("Espanol");


       
    
    public void init()
    {
        //Add program of title to display on the App.
        JPanel Title = new JPanel();
        Title.add(lblTitle);
        Title.setBackground(Color.black);
        lblTitle.setForeground(Color.red);
        
        
        //Added JPanel
        
        
        

        //Add the row that will have the american label,and text field input
        JPanel American = new JPanel();
        American.add(lblAmerica);
        American.add(txtAmerica);
        American.setBackground(Color.black);
        lblAmerica.setForeground(Color.red);
        
        //Add the row that will have the mexico label, and text field input.
        JPanel Mexican = new JPanel();
        Mexican.add(lblMexico);
        Mexican.add(txtMexico);
        Mexican.setBackground(Color.black);
        lblMexico.setForeground(Color.blue);
        
        //Add a row for the one convert button.
        JPanel Button = new JPanel();
        Button.add(btnConvert);
        btnConvert.addActionListener(this);
        Button.add(btnClear);
        btnClear.addActionListener(this);
        Button.setBackground(Color.black);
        btnClear.setBackground(Color.white);
        btnConvert.setBackground(Color.black);
        btnConvert.setBackground(Color.black);
        btnConvert.setForeground(Color.red);
        btnClear.setForeground(Color.red);
        
        //Panel for switching language
        JPanel Language = new JPanel();
        Language.add(btnEnglish);
        Language.add(btnGerman);
        Language.add(btnSpanish);
        Language.setBackground(Color.black);
        btnEnglish.setBackground(Color.black);
        btnSpanish.setBackground(Color.black);
        btnGerman.setBackground(Color.black);
        btnEnglish.setForeground(Color.red);
        btnSpanish.setForeground(Color.blue);
        btnGerman.setForeground(Color.blue);
        btnEnglish.addActionListener(this);
        btnSpanish.addActionListener(this);
        btnGerman.addActionListener(this);
        
        //Add the Euro label, and text field input
        JPanel Euro = new JPanel();
        Euro.add(lblEuro);
        Euro.add(txtEuro);
        Euro.setBackground(Color.black);
        lblEuro.setForeground(Color.blue);
        
        
        
        
        
        
        
        //Create the container for the swing components to be layed out by default with FlowLayout()
        Container Currency = getContentPane();
        Currency.setLayout(new FlowLayout());
        
        Currency.add(Language);
        Currency.add(Title);      
        Currency.add(American); 
        Currency.add(Mexican);
        Currency.add(Euro);
        Currency.add(Button);
        Currency.setBackground(Color.black);

        //Set the Content Pane visible
        setVisible(true);
        setContentPane(Currency);
        
        
       
    }
    
    
    /*You will see some error traffic, one if they have nothing in any field, and they try to convert.
     * Again if the try to convert a negative amount in any field.
     */
    
   //Adding the Action Event for the applet.
    public void actionPerformed(ActionEvent action)
    {
       
       //See which button is pressed, then go do what the button needs to do.
       if (action.getSource() == btnClear)
       {
           txtMexico.setText("");
           txtAmerica.setText("");
           txtEuro.setText("");
        } 
        
        else if(action.getSource() == btnGerman)
        {
          lblAmerica.setText("Das Amerika      ");
          lblMexico.setText("Das Spanisch     ");
          lblEuro.setText("Das Geld(Euro)   ");
          lblAmerica.setForeground(Color.blue);
          lblMexico.setForeground(Color.blue);
          lblEuro.setForeground(Color.red);
          btnGerman.setForeground(Color.red);
          btnEnglish.setForeground(Color.blue);
          btnSpanish.setForeground(Color.blue);
          
        }
        else if(action.getSource() == btnEnglish)
        {
         lblAmerica.setText("American Currency");
         lblMexico.setText("Mexican Pesos      ");
         lblEuro.setText("Euro Amount         ");
         lblAmerica.setForeground(Color.red);
         lblMexico.setForeground(Color.blue);
         lblEuro.setForeground(Color.blue);
         btnEnglish.setForeground(Color.red);
         btnSpanish.setForeground(Color.blue);
         btnGerman.setForeground(Color.blue);
        }
        else if(action.getSource() == btnSpanish)
        {
            lblAmerica.setText("Ingles                      ");
            lblMexico.setText("Mexico Pesos      ");
            lblEuro.setText("Spanish German   ");
            lblAmerica.setForeground(Color.blue);
            lblMexico.setForeground(Color.red);
            lblEuro.setForeground(Color.blue);
            btnGerman.setForeground(Color.blue);
            btnSpanish.setForeground(Color.red);
            btnEnglish.setForeground(Color.blue);
        }
        else if(action.getSource() == btnConvert)
        {
        if(txtAmerica.getText().equals("") && txtMexico.getText().equals("") && txtEuro.getText().equals(""))
        {
           //Create an "ERROR" method, use it for each object on the applet.
            Error();
        }
        //If they enter something in only the mexico box lets solve for the other two.
        if(txtAmerica.getText().equals("") && txtEuro.getText().equals(""))
        {
        try
    {
        //Go to the main mexico method, and solve
       getAndshowPesos();  
       
    }
    catch (ArithmeticException mathE)
    {
     
    }
    }

    //If the Euro input is filled up lets solve for the other two.
     if(txtMexico.getText().equals("") && txtAmerica.getText().equals(""))
    {
        try
        {
            //Main method to convert the Euro in the other two languages
            Euro();
        }
        catch(ArithmeticException mathE)
        {
            
        }
    }
    
    //OK if the american textfield has something in it, lets solve for the other two languages
    if(txtMexico.getText().equals("") && txtEuro.getText().equals(""));
    {
        try
       {
           //Main method to convert the American currency in the other two languages
           getAndshowAmericaCurrency();
        }
        catch(ArithmeticException mathE)
        {
            
        }
        
    }
}
    
    // void clearFields()
    //{
     //txtMexico.setText(""):   
    //}
    

}


    
    //Main method if the mexico field has something in it, and the other two do not.
    public void getAndshowPesos()
    {
        //declaring vars.  EConvert is the conversion on Euro, and AConvert is the American conversion
        double EConvert = 1.3;
        double AConvert = 11.2;
        double Mamount = Double.parseDouble(txtMexico.getText());
        if(Mamount <=-1)
        {
         Impossible();   
        }
        else if (Mamount >=0)
        {
        double ATotal = Mamount / Converter1;
        double ETotal = (Mamount / Converter1) * Converter2;
        //Lets convert the currency, and display them.  Look at twoDigits.format that is in chapter 4.  Rounding to two dicimal places.
       txtAmerica.setText("" + twoDigits.format(ATotal));
       txtMexico.setText("" + twoDigits.format(Mamount));
       txtEuro.setText("" + twoDigits.format(ETotal));
       
       
    }
      
    }

    //Funtion method, to convert the American Currency to Pesos, and Euro
    public void getAndshowAmericaCurrency()
    {
        //Declare the vars.  AConverter is from american to mexico, and EConverter is american to euro.
        double Aamount = Double.parseDouble(txtAmerica.getText());
        if(Aamount <= -1)
        {
         Impossible();   
        }
        else if (Aamount >= 0)
        {
        double PTotally  = Aamount * Converter1;
        double ETotally =  Aamount * Converter2;
        
        
        //Lets convert the currency, and display them.  Look at twoDigits.format that is in chapter 4.  Rounding to two dicimal places.
        txtAmerica.setText(" " + twoDigits.format(Aamount));
        txtEuro.setText(" " + twoDigits.format(ETotally));
        txtMexico.setText(" " + twoDigits.format(PTotally));
    }


    }
    
    //Lets display the answers in the textfields, but first lets round off, our final answer.
    public void Euro()
    {
        //Construct the vars.  AConverter is the american convert, and the Econverter is the euro converter
        double Eamount = Double.parseDouble(txtEuro.getText());
        if(Eamount <= -1)
        {
         Impossible();   
        }
        else if (Eamount >= 0)
        {
        double ATotally  = Eamount / Converter2;
        double PTotally =  (Eamount / Converter2) * Converter1;
        
      //Lets convert the currency, and display them.  Look at twoDigits.format that is in chapter 4.  Rounding to two dicimal places.
        txtAmerica.setText(" " + twoDigits.format(ATotally));
        txtEuro.setText(" " + twoDigits.format(Eamount));
        txtMexico.setText(" " + twoDigits.format(PTotally));
    }
    }
    //Method of error saying it is impossible to convert 3 nothings  (Ha Ha Ha....)
    public void Error()
    {
     
     JOptionPane.showMessageDialog(null, "You have to start out with a value in one of the input boxes for this to be a currency converter.","Error - [westhenderson_javastudent]",JOptionPane.ERROR_MESSAGE);
    }
    
    ////Method of Impossible saying it is impossible in "REAL LIFE" to convert negative currecny to pesos, and vise versa
    public void Impossible()
    {
     JOptionPane.showMessageDialog(null, "Can you convert a negative amount of money?  Not if you owe me.","Error - [westhenderson_javastudent]",JOptionPane.ERROR_MESSAGE);   
    }
    
    //Get info for my applet, and let others use it.
    public String getAppletInfo()
	{

		return "Currency Converter Beta V1.0:   \nCarl Finch:   \n A simple applet that converts currency depending on which textfield \n you fill out.  Also has a language switch for English, spanish, and german. \n  To use the applet just simply go to one of the text fields enter an amount \n, and press 'Convert Currency' Once your done press the 'Clear fields' \n to clear all fields.   Only enter one amount to each textfield. \n  For example if I  have american currency of $5 I would enter 5 in the \n american text field, and hit convert currency \n That would then display the amount of currency in the other two countries. \n  You can enter any amount of data in any field, but only one in each field, at a time.";
	}

  
} 
