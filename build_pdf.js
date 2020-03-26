function selecionaPlataforma(){
  //plataforma uri selecionada
  if (document.getElementById("uri1").checked||document.getElementById("uri2").checked||
      document.getElementById("uri3").checked||document.getElementById("uri5").checked||
      document.getElementById("uri6").checked) {
        

        $('#escolhe').mouseup(function() {
          $('#geraURI').toggle();
          $('#geraBasUri').toggle();
          $('#geraInfoURI').toggle();
          $('#geraInfoEstatistica').toggle();
          $('#geraSolucao').toggle();
          exists = 1;
        });
  }
  //plataforma codeboard selecionada
  if (document.getElementById("uricodeboard1").checked||document.getElementById("uricodeboard2").checked||
      document.getElementById("uricodeboard3").checked||document.getElementById("codeboard4").checked||
      document.getElementById("codeboard6").checked||document.getElementById("codeboard7").checked) {
        
        $('#escolhe').mouseup(function() {
          $('#geraCodeboard').toggle();
          $('#geraBasCodeboard').toggle();
          $('#geraInfoEstatistica').toggle();
          $('#geraSolucao').toggle();
          exists = 1;
        });
  }
  //plataforma pythontutor selecionada
  if (document.getElementById("python3").checked||document.getElementById("python5").checked||
    document.getElementById("python6").checked || document.getElementById("python7").checked||
    document.getElementById("python72").checked||document.getElementById("python8").checked) {
        
        $('#escolhe').mouseup(function() {
          $('#geraPython').toggle();
          $('#geraSolucao').toggle();
          exists = 1;
        });
  }
}

//constrói o cabeçalho do guião
function build_head(doc,tipoGuia)
{
  doc.addImage(imgLogo, 'JPEG', 40, 15, 130, 25);

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

//constrói a tabela inicial
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

      //verifica qual é a matéria
      if(i == 0){
        if(document.getElementById("materia1").checked )
          doc.text(x, y, linhasCodeboard[i][0]); //tipos de dados
        if(document.getElementById("materia2").checked )
          doc.text(x, y, linhasCodeboard[i][1]); //testes e condições
        if(document.getElementById("materia3").checked )
          doc.text(x, y, linhasCodeboard[i][2]); //instruções de iteração
        if(document.getElementById("materia4").checked )
          doc.text(x, y, linhasCodeboard[i][3]); //funções
        if(document.getElementById("materia5").checked )
          doc.text(x, y, linhasCodeboard[i][4]); //vetores
        if(document.getElementById("materia6").checked )
          doc.text(x, y, linhasCodeboard[i][5]); //strings
        if(document.getElementById("materia7").checked )
          doc.text(x, y, linhasCodeboard[i][6]); //apontadores
        if(document.getElementById("materia8").checked )
          doc.text(x, y, linhasCodeboard[i][7]); //recursividade
      }

      //verifica se é dentro ou fora de sala de aula
      else if(i == 6){     
        if( $("#dentroFora").val() == "Dentro de sala de aula" )
          doc.text(x, y, linhasCodeboard[i][0]); //dentro de sala de aula
        
        if( $("#dentroFora").val() == "Fora de sala de aula" )
          doc.text(x, y, linhasCodeboard[i][1]); //fora de sala de aula   
      }
      
      else{
        if(numeroGuia == "codeboard")
          doc.text(x, y, linhasCodeboard[i]);
        if(numeroGuia == "uri")
          doc.text(x, y, linhasURI[i]);
        if(numeroGuia == "python")
          doc.text(x, y, linhasPython[i]);
      }
    }

  
}

function build_body(doc,tipoGuia,numeroGuia)
{
  doc.addPage();
  var textB,aux,auxURI;


  if(tipoGuia == "aluno")
  {
    if(numeroGuia == "codeboard"){
      textB = textoBaseAlunoCodeboard;
      imgB = imgBaseAlunoCodeboard;
    }
    else if(numeroGuia == "uri"){
      textB = textoBaseAlunoURI;
      imgB = imgBaseAlunoURI;
      
    }
    else if(numeroGuia == "python"){
      textB = textoBaseAlunoPython;
      imgB = imgBaseAlunoPython;
      
    }
  }
  else
  {
    if(numeroGuia == "codeboard"){
      textB = textoBaseProfessorCodeboard;
      imgB = imgBaseProfessorCodeboard;
    }
    else if(numeroGuia == "uri"){
      textB = textoBaseProfessorURI;
      imgB = imgBaseProfessorURI;   
     
    }
    else if(numeroGuia == "python"){
      textB = textoBaseProfessorPython;
      imgB = imgBaseProfessorPython;   
     
    }
   
  }
  var cont = 0;
  var inicioTexto = 30;
  var espacoLinhas = 110;
  var contaExercicios = 0;
   for(i = 0; i < textB.length; i++)
    {
      //adiciona exercicios uri
      if(i ==  5){
        $('#e1 option:selected').each(function(){
              if(tipoGuia == "professor")
                textB[i] += "\n" + this.value;
              contaExercicios++;
        });
        $('#e2 option:selected').each(function(){
              if(tipoGuia == "professor")
                textB[i] += "\n" + this.value;
              contaExercicios++;
        });
        $('#e3 option:selected').each(function(){
              if(tipoGuia == "professor")
                textB[i] += "\n" + this.value;
              contaExercicios++;
        });
        $('#e8 option:selected').each(function(){
              if(tipoGuia == "professor")
                textB[i] += "\n" + this.value;
              contaExercicios++;
        });
        $('#e15 option:selected').each(function(){
              if(tipoGuia == "professor")
                textB[i] += "\n" + this.value;
              contaExercicios++;
        });
      }
      //adiciona exercicios codeboard
      if(i == 0){
        $('#e13 option:selected').each(function(){
              if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][0] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
        $('#e14 option:selected').each(function(){
              if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][0] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
        $('#e16 option:selected').each(function(){
              if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][0] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
        $('#e17 option:selected').each(function(){
              if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][1] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
        $('#e18 option:selected').each(function(){
              if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][1] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
        $('#e23 option:selected').each(function(){
              if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][1] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
      }

      //adiciona exercicios python 
      if(i ==  1){
        $('#e4 option:selected').each(function(){
               if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][0] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
        $('#e9 option:selected').each(function(){
               if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][0] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
        $('#e21 option:selected').each(function(){
               if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][0] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
        $('#e19 option:selected').each(function(){
               if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][1] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
        $('#e20 option:selected').each(function(){
               if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][1] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
        $('#e22 option:selected').each(function(){
               if(tipoGuia == "professor"){
                if(cont>0)
                  textB[i] = textB[i] + "\n" + this.value;  
                else{
                  textB[i] = textB[i][1] + "\n" + this.value;
                  cont++;
                }              
              }
              contaExercicios++;
        });
      }
      var conta = 0;
      //alterações guião python
      if(tipoGuia == "professor" && (i == 0|| i == 2)){
      $('#e4 option:selected').each(function(){             
            if(conta == 0){
              textB[i] = textB[i][0]; 
              conta++;
            }                     
      });
      $('#e9 option:selected').each(function(){             
            if(conta == 0){
              textB[i] = textB[i][0]; 
              conta++;
            }                     
      });
      $('#e21 option:selected').each(function(){             
            if(conta == 0){
              textB[i] = textB[i][0]; 
              conta++;
            }                     
      });
      $('#e19 option:selected').each(function(){             
            if(conta == 0){
              textB[i] = textB[i][1]; 
              conta++;
            }                     
      });
      $('#e20 option:selected').each(function(){             
            if(conta == 0){
              textB[i] = textB[i][1]; 
              conta++;
            }                     
      });
      $('#e22 option:selected').each(function(){             
            if(conta == 0){
              textB[i] = textB[i][1]; 
              conta++;
            }                     
      });
    }

      if(i % 3 == 0 && i != 0){
        doc.addPage(); 
        inicioTexto = 30;
      }
      //adiciona textos

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
      var conta = 0;

      //imagens após os exercícios dos guiões codeboard e uri
      //alteração devido ao tratamento de espaço necessário
      if(tipoGuia == "professor" && numeroGuia == "codeboard" && i == 1)
        doc.addImage(imgB[i], 'JPEG', 60, high + 100, 100, 60);  
      else if(tipoGuia == "professor" && (numeroGuia == "uri") && i == 5)
        doc.addImage(imgB[i], 'JPEG', 60, high + 95, 100, 60); 
     // else if(tipoGuia == "professor" && (numeroGuia == "python") && i == 1)
      //  doc.addImage(imgB[i], 'JPEG', 60, high + 95, 100, 60); 


      //primeira imagem guiões uri_codeboard/codeboard
      else if(tipoGuia == "professor" && i == 0 && numeroGuia == "codeboard"){
          $('#e13 option:selected').each(function(){             
            if(conta == 0){
              doc.addImage(imgB[i][0], 'JPEG', 60, high + 75, 100, 60);  
              conta++;
            }                     
          });
          $('#e14 option:selected').each(function(){             
            if(conta == 0){
              doc.addImage(imgB[i][0], 'JPEG', 60, high + 75, 100, 60);  
              conta++;
            }                     
          });
          $('#e16 option:selected').each(function(){             
            if(conta == 0){
              doc.addImage(imgB[i][0], 'JPEG', 60, high + 75, 100, 60);  
              conta++;
            }                     
          });
          $('#e17 option:selected').each(function(){         
            if(conta == 0){
              doc.addImage(imgB[i][1], 'JPEG', 60, high + 75, 100, 60);  
              conta++;
            }                     
          });
          $('#e18 option:selected').each(function(){         
            if(conta == 0){
              doc.addImage(imgB[i][1], 'JPEG', 60, high + 75, 100, 60);  
              conta++;
            }                     
          });
          $('#e23 option:selected').each(function(){         
            if(conta == 0){
              doc.addImage(imgB[i][1], 'JPEG', 60, high + 75, 100, 60);  
              conta++;
            }                     
          });
      }
      //primeira e segunda imagem cpuzzles_pythontutor/livro_pythontutor
      else if(tipoGuia == "professor" && (i == 0 || i == 1) && numeroGuia == "python"){
          $('#e4 option:selected').each(function(){             
            if(conta == 0){
              if(i == 0)
                doc.addImage(imgB[i][0], 'JPEG', 60, high + 75, 100, 60);  
              else
                doc.addImage(imgB[i][0], 'JPEG', 60, high + 95, 100, 60);  
              conta++;
            }                     
          });
          $('#e9 option:selected').each(function(){             
            if(conta == 0){
              if(i == 0)
                doc.addImage(imgB[i][0], 'JPEG', 60, high + 75, 100, 60);  
              else
                doc.addImage(imgB[i][0], 'JPEG', 60, high + 95, 100, 60);  
              conta++;
            }                     
          });
          $('#e21 option:selected').each(function(){             
            if(conta == 0){
              if(i == 0)
                doc.addImage(imgB[i][0], 'JPEG', 60, high + 75, 100, 60);  
              else
                doc.addImage(imgB[i][0], 'JPEG', 60, high + 95, 100, 60);  
              conta++;
            }                     
          });
          $('#e19 option:selected').each(function(){             
            if(conta == 0){
              if(i == 0)
                doc.addImage(imgB[i][1], 'JPEG', 60, high + 75, 100, 60);  
              else
                doc.addImage(imgB[i][1], 'JPEG', 60, high + 75, 100, 60);  
              conta++;
            }                     
          });
          $('#e20 option:selected').each(function(){             
            if(conta == 0){
              if(i == 0)
                doc.addImage(imgB[i][1], 'JPEG', 60, high + 75, 100, 60);  
              else
                doc.addImage(imgB[i][1], 'JPEG', 60, high + 75, 100, 60);  
              conta++;
            }                     
          });
          $('#e22 option:selected').each(function(){             
            if(conta == 0){
              if(i == 0)
                doc.addImage(imgB[i][1], 'JPEG', 60, high + 75, 100, 60);  
              else
                doc.addImage(imgB[i][1], 'JPEG', 60, high + 75, 100, 60);  
              conta++;
            }                     
          });
          
      }
      
      else
        doc.addImage(imgB[i], 'JPEG', 60, high + 75, 100, 60);
      
      
      inicioImg = inicioImg + espacoLinhasImg;
      high = high + 90;

      //adiciona quantidade de exercícios e duração
      var x = 32;
      var y = 147;  
      if(contaExercicios != 0){
        doc.setPage(1);
        doc.text(x, y, contaExercicios.toString());
        y = 136;
        var duracao = contaExercicios * 10;
        doc.text(x, y, duracao.toString());
      }

   }

   

}
function codigosBase(){
   $('#e13 option:selected').each(function(){
        if(this.value == "1002 - Área do Círculo - Estimativa: 10 minutos")
          window.open("https://marciviana.github.io/codigo_base_1002_area_do_circulo.html", 'area_circulo');
        if(this.value == "1005 - Média 1 - Estimativa: 10 minutos")
          window.open("https://marciviana.github.io/codigo_base_1005_media1.html", 'media1');
        if(this.value == "1006 - Média 2 - Estimativa: 10 minutos")
          window.open("https://marciviana.github.io/codigo_base_1006_media2.html", 'media2');
    });
   $('#e14 option:selected').each(function(){
        if(this.value == "1061 - Tempo de um Evento - Estimativa: 10 minutos")
          window.open("https://marciviana.github.io/codigo_base_1061_tempo_de_um_evento.html", 'tempo_evento');
    });
   $('#e16 option:selected').each(function(){
        if(this.value == "1071 - Soma de Ímpares Consecutivos - Estimativa: 10 minutos")
          window.open("https://marciviana.github.io/codigo_base_1071_soma_impares_consecutivos.html", 'soma_impares');
        if(this.value == "1132 - Múltiplos de 13 - Estimativa: 10 minutos")
          window.open("https://marciviana.github.io/codigo_base_1132_multiplos_13.html", 'multiplos_13');
    });
   $('#e17 option:selected').each(function(){
        if(this.value == "Cap. 5. Pág. 127 - 4. Devolver valor absoluto de X - Estimativa: 10 minutos")
          window.open("https://marciviana.github.io/codigo_base_valor_absoluto_x.html", 'valor_absoluto');
        if(this.value == "Cap. 5. Pág. 128 - 16. Verifica se ch é uma das vogais do alfabeto - Estimativa: 10 minutos")
          window.open("https://marciviana.github.io/codigo_base_verifica_vogais.html", 'verifica_vogais');
        
    });
   $('#e18 option:selected').each(function(){
        if(this.value == "Cap. 8. Pág. 201 - 8. Apaga todos os caracteres maiúsculos em s - Estimativa: 10 minutos")
          window.open("https://marciviana.github.io/codigo_base_apaga_maiusculos.html", 'apaga_maiusculos');
        if(this.value == "Cap. 8. Pág. 201 - 9. Apaga em s1 a primeira ocorrência de s2 - Estimativa: 10 minutos")
        window.open("https://marciviana.github.io/codigo_base_apaga_prim_ocorrencia.html", 'apaga_prim_ocor'); 
    });
   $('#e23 option:selected').each(function(){
        if(this.value == "Cap. 7. Pág. 182 - 3.1. Receba uma string e retire os caracteres que não se encontram repetidos - Estimativa: 10 min")
          window.open("https://marciviana.github.io/codigo_base_retira_caracteres.html", 'retira_caracteres');
    });
}

function geraSolucoes()
{

  window.open("https://marciviana.github.io/solucoes.html", 'solucoes');    
    
}

function atualizaPag()
{
  location.reload();
  $('html,body').scrollTop(0);
}

function build_prof_pdf(numeroGuia)
{
  if(numeroGuia == "codeboard"){
    //gera new tabs com códigos base
    codigosBase();
  }
  //professor
  var doc = new jsPDF();
  doc.setFontSize(10);
  var tipoGuia = "professor";
  build_head(doc,tipoGuia);
  build_table(doc,numeroGuia);
  build_body(doc,tipoGuia,numeroGuia);
  doc.save('guia_'+numeroGuia+'_'+tipoGuia+'.pdf');
  
  //aluno
  var doc = new jsPDF();
  doc.setFontSize(10);
  var tipoGuia = "aluno";
  build_head(doc,tipoGuia);
  build_table(doc,numeroGuia);
  build_body(doc,tipoGuia,numeroGuia);

  doc.save('guia_'+numeroGuia+'_'+tipoGuia+'.pdf');

}
