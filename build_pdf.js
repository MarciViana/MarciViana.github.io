
function build_head(doc,tipoGuia)
{


  doc.addImage(imgLogo, 'JPEG', 40, 15, 130, 25);
  //doc.addImage(imgIpb, 'JPEG', 25, 60, 55, 20);
  //doc.text(28, 35, '\t\t\t\t\t\t\t\t UNIVERSIDADE TECNOLÓGICA FEDERAL DO\n\t\t\t\t\t\t\t\t\tPARANÁ CAMPUS PONTA GROSSA\n\t\t\t\t\t\t\t\t\t\tDepartamento de Computação\n\t\t\t\t\t\t\t\t\tBacharelado em Ciência da Computação');
  //doc.text(28, 35, '\t\t\t\t\t\t\t\t UNIVERSIDADE TECNOLÓGICA FEDERAL DO\n\t\t\t\t\t\t\t\t\tPARANÁ');
  //doc.text(28, 65, '\t\t\t\t\t\t\t\t INSTITUTO POLITÉCNICO DE BRAGANÇA\n\t\t\t\t\t\t\t\t\tEscola Superior de Tecnologia e Gestão\n\t\t\t\t\t\t\t\t\t\tLicenciatura em Informática');
  //doc.text(28, 65, '\t\t\t\t\t\t\t\t INSTITUTO POLITÉCNICO DE BRAGANÇA');

  doc.setFontType('bold');
  if(tipoGuia == "aluno")
  {
     tipoGuia = tituloAluno;
  }
  else
  {
    tipoGuia = tituloProfessor;
  }
  doc.text(30, 65, '\t\t\t\t\t\t' + tipoGuia);
}


function build_table(doc,numeroGuia)
{

  // Construção da tabela
var pontoInicio = 30;
var largura = 150;
var linhaA = 82;

doc.rect(pontoInicio, linhaA, largura, 76);

for(i = 0; i < 6; i++) {
if(i == 2)
  {
     linhaA = linhaA + 16;
  }
  else
  {
     linhaA = linhaA + 10;
  }
  doc.line(pontoInicio, linhaA, largura+30, linhaA);
}
//fim construção da tabela

  var x = 32;
  var y = 76;
  for(i = 0; i < 7; i++) {
    if(i == 3)
    {
      y = y+16;
    }
    else
    {
      y = y+10;
    }
    doc.setFontType('bold');
    doc.text(x, y, titulos[i]);
    doc.setFontType('italic');

    if(numeroGuia == "1.0")
      doc.text(x, y, linhasCodeboard[i]);
    if(numeroGuia == "1.1"|| numeroGuia == "1.2"||numeroGuia == "1.3"||numeroGuia == "1.4"||numeroGuia == "1.5")
      doc.text(x, y, linhasURI[i]);
  }

}

function build_body(doc,tipoGuia,numeroGuia)
{
  doc.addPage();
  var textB,aux;
  if(tipoGuia == "aluno")
  {
    if(numeroGuia == "1.0"){
      textB = textoBaseAlunoCodeboard;
      imgB = imgBaseAlunoCodeboard;
    }
    else if(numeroGuia == "1.1"||numeroGuia == "1.2"||numeroGuia == "1.3"||numeroGuia == "1.4"||numeroGuia == "1.5"){
      textB = textoBaseAlunoURI;
      imgB = imgBaseAlunoURI;
      
    }
  }
  else
  {
    if(numeroGuia == "1.0"){
      textB = textoBaseProfessorCodeboard;
      imgB = imgBaseProfessorCodeboard;
    }
    else if(numeroGuia == "1.1"){
      textB = textoBaseProfessorURI;
      imgB = imgBaseProfessorURI;   
      auxURI = 1;
    }
    else if(numeroGuia == "1.2"){
      textB = textoBaseProfessorURI;
      imgB = imgBaseProfessorURI;
      auxURI = 2;  
    }
    else if(numeroGuia == "1.3"){
      textB = textoBaseProfessorURI;
      imgB = imgBaseProfessorURI;   
      auxURI = 3;
    }
    else if(numeroGuia == "1.4"){
      textB = textoBaseProfessorURI;
      imgB = imgBaseProfessorURI;
      auxURI = 4;  
    }
    else if(numeroGuia == "1.5"){
      textB = textoBaseProfessorURI;
      imgB = imgBaseProfessorURI;
      auxURI = 5;  
    }
  }

  var inicioTexto = 30;
  var espacoLinhas = 110;
//  var textFinal = doc.splitTextToSize(textB, 170);
   for(i = 0; i < textB.length; i++)
    {
      if(i == 6 && auxURI == 1)
        textB[i] = textB[i][0];
      if(i == 6 && auxURI == 2)
        textB[i] = textB[i][1];
      if(i == 6 && auxURI == 3)
        textB[i] = textB[i][2];
      if(i == 6 && auxURI == 4)
        textB[i] = textB[i][3];
      if(i == 6 && auxURI == 5)
        textB[i] = textB[i][4];
      if(i % 3 == 0 && i != 0){
        doc.addPage(); 
        inicioTexto = 30;
      }

      doc.text(25, inicioTexto, textB[i]);

      inicioTexto = inicioTexto + espacoLinhas;
      if(i>0)
        inicioTexto = inicioTexto - 20;
    }
  var inicioImg = 30;
  var espacoLinhasImg = 30;
  var high = -10;
  var page = 2;
   for(i = 0; i < imgB.length; i++){
      doc.setPage(page);
      if(high >= 150){
        if(page == 2){
          doc.setPage(3);
          page = 3;
        }
        else if(page == 3){
          doc.setPage(4);
          page = 4;
        }
        else if(page == 4){
          doc.setPage(5);
          page = 5;
        }
        else if(page == 5){
          doc.setPage(6);
          page = 6;
        }
        else if(page == 6){
          doc.setPage(7);
          page = 7;
        }
        else if(page == 7){
          doc.setPage(8);
          page = 8;
        }
        else if(page == 8){
          doc.setPage(9);
          page = 9;
        }
        high = -30;
      }
      if(tipoGuia == "professor" && numeroGuia == "1.0" && i == 1)
        doc.addImage(imgB[i], 'JPEG', 60, high + 100, 100, 60);  
      else if(tipoGuia == "professor" && (numeroGuia == "1.1"||numeroGuia == "1.2"||numeroGuia == "1.3"||numeroGuia == "1.4"||numeroGuia == "1.5") && i == 5)
        doc.addImage(imgB[i], 'JPEG', 60, high + 95, 100, 60); 
      else
        doc.addImage(imgB[i], 'JPEG', 60, high + 75, 100, 60);
      inicioImg = inicioImg + espacoLinhasImg;
      high = high + 90;
   }

}


function build_prof_pdf(numeroGuia)
{
  if(numeroGuia == "1.0"){
    //new tab com códigos base
    window.open("https://marciviana.github.io/codigo_guia1.0.html", '_blank');
  }
  //professor
  var doc = new jsPDF();
  doc.setFontSize(10);
  var tipoGuia = "professor";
  build_head(doc,tipoGuia);
  build_table(doc,numeroGuia);
  build_body(doc,tipoGuia,numeroGuia);
  doc.save('guia'+numeroGuia+'_'+tipoGuia+'.pdf');
  
  //aluno
  var doc = new jsPDF();
  doc.setFontSize(10);
  var tipoGuia = "aluno";
  build_head(doc,tipoGuia);
  build_table(doc,numeroGuia);
  build_body(doc,tipoGuia,numeroGuia);

  doc.save('guia'+numeroGuia+'_'+tipoGuia+'.pdf');

}
