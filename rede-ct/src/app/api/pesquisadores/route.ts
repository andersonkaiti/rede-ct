"use server";

import "server-only";

export interface IPesquisador {
  name: string;
  info: string;
}

export interface ICategoria {
  type: string;
  members: IPesquisador[];
}

const categorias: ICategoria[] = [
  {
    type: "Pesquisador Sênior",
    members: [
      {
        name: "Alceu Zoia, Dr.",
        info: "(UNEMAT - Sinop/MT) - cadastro 031 - alceuzoia@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 3, 4 e 13. Formação: Doutor em Educação (UFG); Mestre em Educação (UFMT); Graduação em Filosofia (UNIJUI). Atuação: Docente da UNEMAT e pesquisador de etnoeducação.",
      },
      {
        name: "Alonso Bezerra de Carvalho, Dr.",
        info: "Ld. (UNESP - Marília/SP) - cadastro 60 - alonso.carvalho@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 3, 13 e 14. Formação: Livre-docente em Educação (UNESP). Doutor em Educação (USP); Mestre em Educação (UNESP). Graduação em Filosofia (UNESP) e em Ciências Sociais (UNESP). Atuação: Professor Associado na UNESP (Câmpus de Marília/SP).",
      },

      {
        name: "Ana Carolina Amorim Oliveira, Dra.",
        info: "(UFMA - Câmpus São Bernardo) - cadastro 055 - oliveira.ana@ufma.br - <currículo> - <orcid> - ETPs de maior interesse: 3, 4 e 20. Formação: Doutora em Antropologia Social (USP); Mestre em Antropologia (UFPE); Graduação em Ciências Sociais (UFMA). Atuação: Docente da UFMA, Câmpus de São Bernardo.",
      },

      {
        name: "Ana D'Arc Martins de Azevedo, Dra.",
        info: "(UNAMA e UEPA - Belém/PA) - cadastro 002 - azevedoanadarc@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 1, 5 e 6. Formação: Doutora em Educação (UEPA); Mestre em Educação (UEPA); Mestre em Educação (Universidade Adventista de SP); Graduada em Pedagogia (UNESPA). Especializações: Supervisão Escolar; Educação Especial. Atuação: Docente da UNAMA e da UEPA, pesquisa currículo escolar quilombola e ribeirinho na Amazônia.",
      },

      {
        name: "Ana Elisa Bressan Smith Lourenzani, Dra.",
        info: "Ld. (UNESP Tupã/SP) - cadastro 073 - ana.lourenzani@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 12. Formação: Livre-docente em Análise de Sistemas Agroindustriais. Doutora em Engenharia de Produção (UFSCar). Pós-doutorado em Economia Agrícola (Kansas State University). Mestre em Engenharia de Produção (UFSCar). Graduação em Agronmia (Universidade Federal de Viçoasa). Atuação: Professora Associada na UNESP/Tupã-SP.",
      },

      {
        name: "Ana Margarida Theodoro Caminhas, Dra.",
        info: "(UNESP Jaboticabal/SP) - cadastro 068 - ana.caminhas@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 5, 12 e 22. Formação: Doutorado em Aquicultura (UNESP. Mestrado em Educação (UNICAMP). Graduação em Ciências Biológicas (UNESP). Atuação: Docente da UNESP Jaboticabal.",
      },

      {
        name: "Andrea Scalco Rossi, Dra.",
        info: "Ld. (UNESP Tupã/SP) - cadastro 074 - andrea.scalco@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 12 e 15. Formação: Doutorado em Engenharia de Produção (UFSCar). Mestrado em Egenharia de Produção (UFSCar). Graduação em Egenharia de Alimentos (UNESP). Atuação: Professora Associada na UNESP (Tupã/SP).",
      },

      {
        name: "Angela Inês Liberatti, Dra.",
        info: "(Fundação Educacional de Araçatuba) - cadastro 051 - angelaliberatti@gmail.com - <currículo> - ETPs de maior interesse: 1, 13 e 16. Formação: Doutora em Ciência Política (PUC/SP). Mestre em Ciências Sociais (PUC/SP). Graduações em História (PUC/SP) e Pedagocia (Tarso Dutra). Atuação: Docente da Fundação Educacional de Araçatuba.",
      },

      {
        name: "Angélica Góis Morales, Dra.",
        info: "Ld. (UNESP Câmpus de Tupã/SP) - cadastro 039 - ag.morales@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 15. Formação: Doutora em Meio Ambiente e Desenvolvimento (UFPR). Mestre em Educação Ambiental (FURG). Graduada em Ciências Biológicas (UNESP). Atuação: Docente da FCE/UNESP Tupã. Líder do Grupo de Pesquisa PGEA e da REAP (Rede de Educação Ambiental da Alta Paulista).",
      },

      {
        name: "Antonio Jorge Paraense da Paixão, Dr.",
        info: "(UFPA) - cadastro 082 - ajparaense@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 3, 4, 6, 10, 13, 14, 18 e 22. Formação: Doutorado em Educação. Mestrado em Ciências da Religião. Graduação em Filosofia. Atuação: Docente do IFPA e docente da UEPA.",
      },

      {
        name: "Cacilene Moura Tavares, Dra.",
        info: "(UFPA) - cadastro 078 - kassymoura74@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 1, 6 e 20. Formação: Doutorado em Educação em Ensino de Ciencias e Matematicas (UFPA). Atuação: UFPA.",
      },

      {
        name: "Carina Catiana Foppa, Dra.",
        info: "(UFPA) - cadastro 066 - ccfoppa@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 4, 9, 13, 15 e 20. Formação: Doutora em Educação Ambiental (FURG); Mestre em Planejamento Territorial e Desenvolvimento Socioambiental (UDESC); Graduação em Ciências Biológicas (UNIVALI). Especialização em Dinâmicas de Grupo (Faculdade Monteiro Lobato). Atuação: Docente da UFPA.",
      },

      {
        name: "Carla Giovana Souza Rocha, Dra.",
        info: "(UFPA - Altamira/PA) - cadastro 030 - crocha@ufpa.br - <currículo> - <orcid> - ETPs de maior interesse: 20. Formação: Doutora em Desenvolvimento Rural (UFRGS); Mestre em Desenvolvimento e Agricultura (UFRRJ); Graduado em Ciências Sociais (UFSC). Especialização em Agriculturas Familiares Amazônicas (UFPA); Graduada em AGronomia. Atuação: Docente da UFPA/Altamira/PA onde pesquisa etnodiversidade.",
      },

      {
        name: "Carlos Alberto Sarmento do Nascimento, Dr.",
        info: "(Pref. Mul. de Itaguaí/RJ e UFRRJ) - cadastro 085 - casn.sarmento@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 1, 9 e 12. Formação: Doutorado em Ciências Políticas (PPGCTIA/UFRRJ). Mestrado em Desenvolvimento Territorial e Políticas Públicas (PPGDT/UFRRG). Graduação em Ciências Sociais (UFRJ/FEUC). Especialização em Administração pública (UFF). Atuação: Pesquisador de Pós-Dóc na UFRRJ; Diretor de Projetos e Programas na Secretaria Municipal de Agricultura e Pesca de Itaguaí - SMAP.",
      },

      {
        name: "Dauto João da Silveira, Dr.",
        info: "(UTFPR - Curitiba/PR e docente em Joinvile/SC) - cadastro 004 - dauto.js@gmail.com - <currículo> - ETPs de maior interesse: 1, 3, 9 e 16. Formação: Doutor em Sociologia (UFPR); Mestre em Sociologia Política (UFSC); Graduado em Ciências Sociais (UFSC). Atuação: Docente em Joinvile/SC.",
      },

      {
        name: "Diego Antonio Cabrol, Dr.",
        info: "(Docente da Faculdad de Ciencias Agropecuarias da Universidad Nacional de Cordoba - Argentina) - cadastro 091 - diegocabrol@unc.edu.ar - <currículo> - ETPs de maior interesse: 3, 11 e 12. Formação: Doutor em Sociologia. Atuação: Docente e Pesquisador na Universidad Nacional de Córdoba - Argentina.",
      },

      {
        name: "Edna Ferreira Alencar, Dr.",
        info: "(UFPA) - cadastro 054 - ealencar@ufpa.br - <currículo> - <orcid> - ETPs de maior interesse: 1, 9 e 17. Formação: Doutora em Antropologia (UNB); Mestre em Antropologia (UNB); Graduada em História (UFPA). Atuação: Docente da UFPA (Belém/PA).",
      },

      {
        name: "Fábio José Cardias-Gomes, Dr.",
        info: "(UFMA - Imperatriz/MA) - cadastro 063 - cardias.fabio@gmail.com - <currículo> - ETPs de maior interesse: 5, 19 e 21. Formação: Doutor em Educação (USP). Mestrado em Saúde e Ciências do Esporte (Universidade Tsukuba - Japão); Graduado em Psicologia (UFPA). Atuação: Docente da UFMA (Imperatriz/MA).",
      },

      {
        name: "Fábio Pessoa Vieira, Dr.",
        info: "(UFBA) - cadastro 095 - peoplevieira1981@gmail.com - <currículo> - ETPs de maior interesse: 8, 9 e 13. Formação: Doutorado em Ciências do Ambiente. Mestrado em Educação. Graduação em Geografia. Atuação: Docente do Magistèrio Superior na UFBA.",
      },

      {
        name: "Francilene de Aguiar Parente, Dra.",
        info: "(UFPA) - cadastro 080 - faparente@ufpa.br - <currículo> - <orcid> - ETPs de maior interesse: 5, 20. Formação: Doutorado em Antropologia (UFPA). Mestrado em Ciências Sociais (Antropologia). Graduação em Ciências Sociais. Atuação: Docente do Magistério Superior (UFPA).",
      },

      {
        name: "Francisco Gilson Rebouças Porto Júnior, Dr.",
        info: "(UFT Palmas/TO) - cadastro 045 - gilsonportouft@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 2, 16 e 21. Formação: Doutor em Comunicação e Cultura Contemporânea (UFBA). Mestre em Educação (UNB). Graduações em Comunicação Social/Jornalismo, Pedagogia, História e Letras. Atuação: Docente da UFT (Palmas/TO). Líder do Núcleo de Pesquisas OPAJE/UFT.",
      },

      {
        name: "Isabella Gonçalves Vido, Dra.",
        info: "(Universidade Nova de Lisboa - Lisboa/Portugal) - cadastro 052 - isa.g.vido@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 3, 13 e 14. Formação: Doutorado sdw em Estudos Clássicos (Universidade de Lisboa). Doutorado em Estudos Literários (UNESP). Mestrado em Estudos da Literatura (UFSCar). Graduação em Letras (UNESP). Atuação: Instituto Federal de São Paulo.",
      },

      {
        name: "Izabel Castanha Gil, Dra.",
        info: "(UNIFAI - Adamantina/SP) - cadastro 008 - izabelcastanha@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 11, 15 e 17. Formação: Doutora em Geografia (UNESP); Mestre em Geografia (UNESP); Graduações em Pedagogia (FAFIT), em História (FAFIA), em Geografia (FAFIA), em Estudos Sociais (FAFIA). Atuação: Docente da UNIFAI (Adamantina/SP), pesquisadora sobre cultura caipira e guardiões de sementes crioulas.",
      },

      {
        name: "Joelma Boaventura da Silva, Dra.",
        info: " (UNEB) - cadastro 094 - jbomfim@uneb.br - <currículo> - <orcid> - ETPs de maior interesse: 01, 02 E 20. Formação: Doutorado em Difusão do Conhecimento (UFBA). Mestrado em Educação (UNEB). Graduação em Direito pela Unijorge. Especialista em Pesquisa e extensão no ensino superior (UNEB). Atuação: Universidade do Estado da Bahia- UNEB, docente efetiva. Ordem dos Advogados do Brasil - OAB seccional Bahia, advogada.",
      },

      {
        name: "Josivaldo Alves da Silva, Dr.",
        info: "(UNITINS) - cadastro 084 - josivaldoadm3@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 1. Formação: Doutorado em Desenvolvimento Regional pela Universidade Federal do Tocantins (UFT). Mestrado em Desenvolvimento Regional pela UFT. Especialista em Docência do Ensino Superior. Especialização em Planejamento e Gestão Empresarial. Especializando em Políticas Públicas para Cidades Inteligentes (USP). Graduação em Administração. Atuação: Docente e pesquisador da UNITINS (Dianópolis/TO).",
      },

      {
        name: "Layanna Giordana Bernardo Lima, Dra.",
        info: "(UFT) - cadastro 024 - layanna@mail.uft.edu.br - <currículo> - <orcid> - ETPs de maior interesse: 1, 4 e 5. Formação: Doutora em Ciências (USP); Mestre em Ciências do Ambiente (UFAM); Graduada em Pedagogia (UNITINS). Atuação: UFT.",
      },

      {
        name: "Lamounier Erthal Villela, Dr.",
        info: "(UFRRJ) - cadastro 047 - lamounier.erthal@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 2, 9 e 17. Formação: Doutor em Economia Aplicada (Universidade de Paris 3). Mestre em Planejamento Energético (UFRJ). Graduação em Ciências Econômicas (UFRRJ). Especialização em ëtudes Aprofondies en Economie Apliq (Universidade Grenoble - França). Atuação: Docente da UFRRJ.",
      },

      {
        name: "Lorranne Gomes da Silva, Dra.",
        info: "(UEG - Câmpus Cora Coralina - Goiás/GO) - cadastro 036 - lorrannegomes@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 3, 4 e 13. Formação: Doutora em Geografia (UFG); Mestre em Geografia (UFG); Graduação em Geografia (UEG). Especializações em História (UFG) e Geografia (UFG). Atuação: Docente da UEG e pesquisadora sobre povos indígenas.",
      },

      {
        name: "Ludmila Pereira de Almeida, Dra.",
        info: "(UFG) - cadastro 069 - ludjornalismo@gmail.com - <currículo> - ETPs de maior interesse: 5. Formação: Doutorado em Letras e Linguística (UFG). Mestrado em Comunicação (UFG). Graduação em Letras/Língua Portuguesa e Estudos Lingüísticos (UFG) e em Jornalismo (UFG). Especialização em Estudios Afrolatinoamericanos y caribeños pelo Consejo Latino-Americano de Ciencias Sociales - Argentina, CLACSO. Atuação: Pesquisadora na UFG.",
      },

      {
        name: "Luciene Cristina Risso, Dra.",
        info: "Ld. (UNESP) - cadastro 026 - luciene.risso@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 13 e 14. Formação: Livre-docente em Análise de Paisagem (UNESP); Doutora em Geografia (UNESP); Mestre em Conservação e Manejo de Recursos (UNESP); Graduações em Filosofia (UNÍTALO) e Geografia (UNESP). Atuação: Docente da UNESP Ourinhos/SP.",
      },

      {
        name: "Luis Eduardo Acosta Muñoz, Dr.",
        info: "(Instituto Sinchi - Letícia - Colômbia) - cadastro 065 - lacosta@sinchi.org.co - <currículo> - <orcid> - ETPs de maior interesse: 1, 3 e 12. Formação: Doutor em Globalizacion, Desarrollo y Cooperacion Internacional (Universidad del Pais Vasco - Espanha). Atuação: Pesquisador do Instituto Sinchi - Letícia (Colômbia).",
      },

      {
        name: "Marcelo Aranda Stortti, Dr.",
        info: "(CEFET/RJ) - cadastro 040 - marcelostortti@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 2, 13, 15 e 21. Formação: Doutor em Educação (UFRJ). Mestre em Educação e Cultura (UNESA). Graduação em Ciências Biológicas (Universidade Gama Filho). Especilização em Malacologia de Vetores (Fundação Oswaldo Cruz) Atuação: Professor do CEFET/RJ.",
      },

      {
        name: "Marcio de Albuquerque Vianna, Dr.",
        info: "(UFRRJ) - cadastro 057 - albuvianna@uol.com.br - <currículo> - ETPs de maior interesse: 5, 6, 9, 13 e 17. Formação: Doutor em Ciência Tecnologia e Inovação em Agropecuária (UFRRJ). Mestre em Educação Matemática (USU). Graduação em Matemática (UCB). Atuação: Professor na UFRRJ.",
      },

      {
        name: "Marcos Marques Formigosa, Dr.",
        info: "(UFPA) - cadastro 083 - mformigosa@ufpa.br - <currículo> - ETPs de maior interesse: 6, 13 e 20. Formação: Doutorado em Ensino (UNIVATES), com pesquisa posdoutoral em Didacticas de las Matematicas (Universidade Granada) e em Ambiente. Mestrado em Educação em Ciências Matemáticas (UFPA). Graduação em Matemática (UFPA). Especialização em Extensão Rural, Sistemas Agrários e Ações de Desenvolvimento (UFPA). Atuação: Professor e pesquisador na UFPA.",
      },

      {
        name: "Mariane Ravagio Catelli, Dra.",
        info: "(Secretaria de Educação do Estado de São Paulo) - cadastro 071 - marianecatelli@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 5, 12 e 13. Formação: Doutorado em Geografia (UNESP). Mestrado em Geografia (UEL). Graduação em Geografia (UNESP). Atuação: Professora da Secretaria de Estado da Educação (SP).",
      },

      {
        name: "Marzia Anna Linda Maria Rosti, Dra.",
        info: "(Università degli Studi di Milano) - cadastro 088 - - - <currículo> - <orcid> - ETPs de maior interesse: 1, 3 e 13. Formação: -. Atuação: Professora e Pesquisadora da Università degli Studi di Milano - Milão - Itália.",
      },

      {
        name: "Nelson Russo de Moraes, Dr.",
        info: "Ld. (UNESP Bauru/SP) - cadastro 001 - nelson.russo@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 1, 11 e 16. Formação: Livre-docente em Gestão e Educação Ambiental (UNESP); Doutor em Comunicação e Culturas Contemporâneas (UFBA); Mestre em Serviço Social (UNESP); Graduado em Administração (ITE). Especializações: Antropologia, Gestão Pública, Mídias Digitais, Gestão de Programas Sociais. Atuação: Professor Associado na FAAC/UNESP Bauru-SP. Pesquisa convergências entre os campos da cultura, comunicação e políticas públicas junto aos Povos Tradicionais.",
      },

      {
        name: "Pamela Nayara Modesto, Dra.",
        info: " (FCE) - cadastro 075 - pamela.nutri@hotmail.com - <currículo> - <orcid> - ETPs de maior interesse: 12 e 22. Formação: Doutorado em Ciências da Saúde (UNESP. Mestrado em Ciências da Saúde (UNESP). Graduação em Nutrição (UNIFAI). Atuação: Pesquisadora na FCE.",
      },

      {
        name: "Patrick Maurice Maury, Dr.",
        info: "(UFRRJ) - cadastro 044 - patrick.maury@uol.com.br - <currículo> - <orcid> - ETPs de maior interesse: 14, 15 e 17. Formação: Doutor em Ciências Sociais da América Latina (Universidade de Paris 3); Mestre em Antropologia (Universidade de Paris 1). Graduado em Engenharia Econômica (Istom/França). Atuação: Docente da UFRRJ.",
      },

      {
        name: "Petrônio Lauro Teixeira Potiguar Júnior, Dr.",
        info: "(UEPA) - cadastro 018 - ppotiguar@yahoo.com.br - <currículo> - ETPs de maior interesse: 3, 4 e 20. Formação: Doutor em Sociologia e Antropologia (UFPA); Mestre em Agriculturas Amazônicas (UFPA); Graduado em Ciências Sociais (UFPA). Especialização: Docência do Ensino Superior (FAP). Atuação: Docente da UEPA.",
      },

      {
        name: "Rejane Cleide Medeiros de Almeida, Dra.",
        info: "(UFNT) - cadastro 023 - rejane.almeida@ufnt.edu.br - <currículo> - <orcid> - ETPs de maior interesse: 8. Formação: Doutora em Sociologia (UFG); Mestre em Educação (UFG); Graduação em História (UFPE). Atuação: Docente da UFNT.",
      },

      {
        name: "Richard Douglas Coelho Leão, Dr.",
        info: "(Faculdade de Tecnologia do Amapá) - cadastro 096 - rdcl1975@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 5, 6 e 13. Formação: Doutorado em Ciências Sociais (Unesp/FCLAr). Graduação em Ciências Sociais (UFPA). Atuação: Docente da Faculdade de Técnologia do Amapá.",
      },

      {
        name: "Sidat Yaffa, Dr.",
        info: "(University of The Gambia) - cadastro 089 - syaffa@utg.edu.gm - <currículo> - <orcid> - ETPs de maior interesse: 2, 5 e 18. Formação: Doutorado em Agronomia. Atuação: Docente e Pesquisador na University of The Gâmbia - Gâmbia/África.",
      },

      {
        name: "Sueli do Nascimento, Dra.",
        info: "(Unisalesiano de Lins e de Araçatuba/SP; SEDUC/Birigui/SP e UFMS) - cadastro 029 - sueli.nascimento@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 3 e 13. Formação: Doutora em Educação (UNESP); Mestre em Educação (UEMS); Graduações: Pedagogia, Letras/Espanhol e História. Especializações: Docência no Ensino Superior (Claretiano), Psicomotricidade (FSL) e em Tecnologia Assistiva, Comunicação Alternativa e Língua Brasileira Sinais (Estácio de Ribeirão Preto). Atuação: Docente da Prefeitura Municipal de Birigui/SP, docente da UNISALESIANO de Lins e de Araçatuba/SP; Pesquisadora de Pós-doc da UEMS.",
      },

      {
        name: "Sulivan Souza, Dr.",
        info: "(UFPA) - cadastro 079 - sulivantris@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 20. Formação: Doutorado em Educação. Mestrado em Educação. Graduação em Pedagogia. Atuação: Docente da Faculdade de Etnobiodiversidade da UFPA.",
      },

      {
        name: "Tânia Regina Zimmermann, Dra.",
        info: "(UEMS) - cadastro 062 - taniazimmermann@gmail.com - <currículo> - <orcid > - ETPs de interesse: 13, 15 e 20. Formação: Doutorado em História (UFSC). Mestrado em História (UFSC). Graduação em História (UNIOESTE) e em Pedagogia (UNICESUMAR). Atuação: Universidade Estadual do Mato Grosso do Sul - UEMS (Amambaí - MS).",
      },

      {
        name: "Tiago Tendai Chingore, Dr.",
        info: "(Universidade Licungo - Moçambique - África) - cadastro 034 - tchingore@unilicungo.ac.mz - <currículo> - <orcid> - ETPs de maior interesse: 18 e 22. Formação: Doutorado em Filosofia (Universidade Pedagógica do Moçambique); Mestrado em Educação/Ensino de Filosofia (Universidade Pedagógica de Moçambique); Graduação em Ensino de Filosofia (Universidade Pedagógica do Moçambique). Atuação: Professor do Ensino Superior.",
      },

      {
        name: "Valentin Constantinov, Dr.",
        info: "(Institut of History Moldova State University - Moldávia) - cadastro 090 - walentkonstant@yahoo.fr - <currículo> - <orcid> - ETPs de maior interesse: 2, 16 e 19. Formação: Doutorado em História. Atuação: Pesquisador do Institut of History Moldova State University - Moldávia.",
      },

      {
        name: "Vitor Bini Teodoro, Dr.",
        info: "(UNESP) - cadastro 033 - vitor.bini@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 1, 2 e 17. Formação: Doutorado em Ciências/Agronegócio e Desenvolvimento (UNESP); Mestrado em Ciências (USP); Graduação em Gestão de Políticas Públicas (USP). Atuação: Professor do Ensino Superior.",
      },

      {
        name: "Vivianne Lindsay Cardoso, Dra.",
        info: "(UNESP Bauru) - cadastro 064 - vl.cardoso@unesp.br - <currículo> - ETPs de maior interesse: 1, 3, 13 e 22. Formação: Doutorado em Comunicação (UNESP). Mestrado em Comunicação (UNESP). Graduação em Comunicação Social/Jornalismo (PUC/Campinas). Atuação: Docente na UNESP (Câmpus de Bauru/SP).",
      },

      {
        name: "Waldinéia Antunes de Alcântara, Dra.",
        info: "(UNEMAT) - cadastro 015 - waldineiaferreira@unemat.br - <currículo> - <orcid> - ETPs de maior interesse: 3, 4 e 14. Formação: Doutorado em Educação (UFRGS); Mestrado em Educação (UFMT); Licenciatura em Pedagogia e Biologia (UNEMAT). Atuação: Professora na UNEMAT.",
      },
    ],
  },
  {
    type: "Pesquisador",
    members: [
      {
        name: "Alexandre de Castro Campos, Me.",
        info: "(Doutorando na UNESP) - cadastro 014 - alexandre.c.campos@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 1 e 7. Formação: Doutorando em Ciências/Agronegócio e Desenvolvimento (UNESP); Mestre em Ciências/Agronegóicio e Desenvolvimento (UNESP); Graduação em Geografia (UNISAGRADO). Especialização em Agricultura Biodinâmica (UNIUBE). Atuação: Doutorando na UNESP Tupã/SP.",
      },

      {
        name: "Amanda Pereira da Silva Azinari, Me.",
        info: "(Doutoranda na UFMT) - cadastro 016 - amanda.azinari@unemat.br - <currículo> - <orcid> - ETPs de maior interesse: 4, 13 e 20. Formação: Doutoranda em Educação (UFMT/Cuiabá/MT); Mestre em Educação (UNEMAT); Graduação em Pedagogia (UNEMAT). Atuação: Doutoranda em Educação na UFMT Cuiabá/MT e Servidora Pública da SEDUC/MT.",
      },

      {
        name: "Ana Maria Barbosa Quiqueto, Me.",
        info: "(Doutoranda na UNESP) - cadastro 020 - a.quiqueto@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 1, 5 e 14. Formação: Doutoranda em Ciências/Agronegócio e Desenvolvimento (UNESP); Mestre em Educação (UNOESTE); Graduação em Serviço Social (UNIMAR). Especialização em Gestão de Políticas Públicas Sociais (FAMERP). Atuação: Doutoranda na UNESP Tupã/SP e Assistente Social na Prefeitura de Arco Íris/SP.",
      },

      {
        name: "Bruno Ricardo Carvalho Pires, Me.",
        info: "(UNITINS e Ministério Público do Tocantins) - cadastro 005 - brunorradar@hotmail.com - <currículo> - <orcid> - ETPs de maior interesse: 1, 2, 5 e 17. Formação: Mestre em Comunicação (UFT); Graduações em Serviço Social (UNITINS) e Análise de Sistemas (Claretiano). Atuação: Docente da UNITINS e Assistente Social do Ministério Público do Tocantins.",
      },

      {
        name: "Camila Reis Tomaz, Me.",
        info: "(doutoranda na UERJ) - cadastro 072 - corporalidadeafroindigena@gmail.com - <currículo> - ETPs de maior interesse: 5, 10 e 15. Formação: Doutoranda em Geografia (UERJ). Mestre em Ecoturismo e Conservação (UNIRIO). Bacharel em Educação Física (UFRJ). Atuação: Doutoranda na UERJ.",
      },

      {
        name: "Carla Yoly Maydana Yugar, Bel.",
        info: "(mestranda na UNESP Bauru) - cadastro 022 - carla.yoly@unesp.br - <currículo> - ETPs de maior interesse: 1, 3, 12 e 15. Formação: Mestranda em Engenharia de Produção UNESP); Graduada em Engenharia da Produção (UFAABC). Atuação: Mestranda na UNESP Bauru/SP.",
      },

      {
        name: "Cássia Amélia Gomes, Me.",
        info: "(Docente na UNISAGRADO e doutoranda na UNESP) - cadastro 011 - cassia.amelia@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 1, 14 e 21. Formação: Doutoranda em Ciências/Agronegócio e Desenvolvimento (UNESP); Mestre em Psicologia da Aprendizagem e do Desenvolvimento (UNESP); Graduações em Psicologia (UNISAGRADO) e Pedagogia (UNINTER). Especialização em Psicologia Clínica (HRAC-USP). Atuação: Docente da UNISAGRADO e doutoranda na UNESP Tupã/SP.",
      },

      {
        name: "Celenita Gualberto Pereira Bernieri, Bel.",
        info: "(Prefeitura Municipal de Dianópolis/TO e doutoranda na UNB) - cadastro 027 - celegpb@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 1, 5 e 13. Formação: Mestranda em Sustemtabilidade junto a Povos Tradicionais (UNB) e Mestranda em Educação (FUNINTER). Graduações: Administração Pública (UFT), Pedagogia (UNITINS) e Normal Superior (UNITINS). Especializações: Ciências Humanas e suas Tecnologias (FACINTER); EDucação Infantil e suas Tecnologias (FACINTER); Gestão, Supervisão e Orientação Escolar (AEDUC); Gênero e Diversidade na Escola (UFT). Atuação: Professora na SEDUC/Dianópolis/TO.",
      },

      {
        name: "Cleuma Roberta de Souza Marinho, Me.",
        info: "(Doutoranda na UNAMA) - cadastro 028 - cleumamarinho@yahoo.com - <currículo> - ETPs de maior interesse: 6. Formação: Doutoranda em Comunicação, Linguagem e Cultura (UNAMA); Mestre em Comunicação, Linguagem e Cultura (UNAMA); Graduação em Pedagogia (Universidade Estadual do Amapá). Atuação: Doutoranda pela UNAMA.",
      },

      {
        name: "Cristiane Teixeira Bazílio Marchetti, Me.",
        info: "(Colégio Objetivo de Tupã) - cadastro 038 - cristiane.bazilio@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 1, 4 e 13. Formação: Mestre em Ciências/Agronegócio e Desenvolvimento (UNESP); Graduação em Pedagogia (FACCAT). Especializaqção em Libras e Metodologias de Ensino para alunos Surdos (FACCAT). Atuação: Diretora do Colégio Objetivo de Tupã e integrante do Grupo de Pesquisa Gedgs/UNESP.",
      },

      {
        name: "Edelaine Fogaça Avelaneda, Me.",
        info: "(doutoanda pela UNESP) - cadastro 075 - edelaine.avelaneda@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 12, 20 e 22. Formação: Doutoranda em Agronegócio e Desenvolvimento (Unesp-Tupã). Mestre em Ensino e Saúde (Famema). Bacharel em Nutrição (UNIFAI). Atuação: Doutoranda no PGAD (UNESP Tupã/SP).",
      },

      {
        name: "Fábio Andrade Dias, Bel.",
        info: "(FACCAT e mestrando pela UNESP) - cadastro 043 - fabio.a.dias@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 11, 17 e 20. Formação: Mestrando em Ciências/Agronegócio e Desenvolvimento (UNESP). Graduações em Ciências (UNIMAR), em Pedagogia (FACCFAT) e em Artes (UNIMES. Especializações em Gestão do Ensino (FACCAT). Atuação: Professor na FACCAT e mestrando na UNESP Tupã/SP.",
      },

      {
        name: "Fábio Freitas dos Santos, Me.",
        info: "(Doutorando pela UNESP) - cadastro 012 - fabio.f.santos@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 5, 10 e 15. Formação: Doutorando em Ciências Ambientais (Unesp-Sorocaba), Mestre em Agronegócio e Desenvolvimento (Unesp-Tupã), com Especializações em Pedagogia Empresarial (UNIFACEAR) e em Gestão e Coaching Educacional (FCE) e Licenciaturas em Ciências/Biologia (UNISALESIANO-Lins), em Pedagogia (UNIFIEO) e em Matemática (UniÍtalo), Técnico em Música: Canto/Piano/Regência (Conservatório Musical de Lins). Atuação: Doutorando na UNESP Sorocaba/SP.",
      },

      {
        name: "Gerôncio Silva Barbosa, Me.",
        info: "(Doutorando pela UNESP) - cadastro 025 - silva.barbosa@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 1, 5 e 10. Formação: Doutorando em Estudos Lingüísticos (UNESP); Mestre em Relações Étnicas e Contemporaneidade (UESB); Graduação em Letras (UESB). Atuação: Doutorando na UNESP São José do Rio Preto/SP.",
      },

      {
        name: "Isaltina Santos da Costa Oliveira, Me.",
        info: "(Museu Histórico e Pedagógico Índia Vanuíre e doutoranda na FAAC/UNESP Bauru/SP) - cadastro 006 - tininhacost@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 2, 3 e 16. Formação: Doutoranda em Comunicação (UNESP); Mestre em Ciências/Agronegócios (UNESP). Graduações em Letras/Inglês (FADAP) e Pedagogia (FACCAT). Especialização em Psicopedagogia Empresarial e Educacional (FACCAT). Atuação: Pesquisadora Documentalista do Centro de Pesquisa e Referência do Museu Histórico e Pedagógico Índia Vanuíre (Tupã/SP).",
      },

      {
        name: "Issufo Jacinto Francisco Camanguira, Me.",
        info: "(Governo do Moçambique - África) - cadastro 010 - issufo.jacinto@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 2. Formação: Doutorando em Comunicação (UNESP); Mestre em Jornalismo (Escola Superior de Jornalismo do Moçambique). Graduado em Gestão. Atuação: Profissional do Governo do Moçambique e doutorando na FAAC/UNESP Bauru/SP (DINTER).",
      },

      {
        name: "Jardilene Gualberto Pereira Fôlha, Me.",
        info: "(Prefeitura Municipal de Palmas/TO e doutoranda na UFT) - cadastro 019 - jard.educa@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 1, 5 e 6. Formação: Doutoranda em Educação na Amazônia (UFT); Mestre em Educação (UFT). Graduada em Pedagogia (UFT). Especialização em Gestão Pública (UFT) e em Gestão, Suipervisão e Orientação Escolar (UFT). Atuação: Docente da Secretaria Municipal de Educação de Palmas/TO e doutoranda na UFT.",
      },

      {
        name: "Joana D'Arc Alves Paes Andrade, Me.",
        info: "(SEDUC/TO e UFT) - cadastro 021 - joanadarcpaes@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 3, 4 e 20. Formação: Mestre em Educação (UFT). Graduada em Pedagogia (PUC/GO). Especialização em Educação/Ensino Superior (PUC/GO). Atuação: Seduc/TO e UFT.",
      },

      {
        name: "Joicileia Juiate Fonseca, Bel.",
        info: "(Presidenta do Instituto de Pesquisas Amazônicas e de Povos Tradicionais) - cadastro 041 - joicileia.juliate@hotmail.com - <currículo> - ETPs de maior interesse: 7, 12 e 17. Formação: Graduação em Agronomia (Faculdade Guaraí - FAG). Atuação: Presidenta do Instituto de Pesquisas Amazônicas e de Povos Tradicionais (Porto Nacioinal - TO).",
      },

      {
        name: "Júlio Martins Jerónimo Muhongo, Me.",
        info: "(Instituto Superior Politécnico do Cuanza Sul e Instituto Superior Politécnico do Libolo - ANGOLA - África) - cadastro 053 - julio.muhongo@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 5, 12 e 15. Formação: Mestre em Ciências/Agronegócio e Desenvolvimento (UNESP). Graduado em Gestão de Empresas Agrárias (Instituto Superior Politécnico do Cuanza Sul - Angola). Atuação: Professor do Instituto Superior Politécnico do Cuanza Sul e Instituto Superior Politécnico do Libolo - ANGOLA - África.",
      },

      {
        name: "Karina Gasparelli Benites, Bel.",
        info: "(Secretaria de Educação do estado de São Paulo) - cadastro 070 - karinagasparellibenites@gmail.com - <currículo> - ETPs de maior interesse: 1, 4 e 5. Formação: Graduação em Pedagogia (FACCAT). Especialização em Educação Especial. Atuação: Professora da Secretaria de Educação do estado de São Paulo.",
      },

      {
        name: "Laurenita Gualberto Pereira Alves, Me.",
        info: "(Secretaria de Educação do Tocantins e doutoranda na UFT Palmas/TO) - cadastro 009 - laurinhagualberto25@gmail.com - <currículo> - <orcid> - ETPs de maior interesse: 1, 5 e 6. Formação: Doutoranda em Ciências do Ambiente (UFT); Mestre em Educação (UFT). Graduações em Administração Pública (UFT) e em Normal Superior (UNITINS). Especialização em Supervisão Escolar (UJC) e em Gênero e Diversidade na Escola (UFT). Atuação: Professora da Secretaria de Educação do Tocantins, pesquisadora sobre cultura e educação quilombola.",
      },

      {
        name: "Letícia Apoliana Ferreira Barbosa, Bel.",
        info: "(Mestranda na UFT Palmas/TO) - cadastro 048 - leticiabarbosa@professor.to.gov.br - <currículo> - <orcid> - ETPs de maior interesse: 4, 13 e 14. Formação: Mestranda em Educação (UFT). Graduação em Pedagogia. Atuação: Mestranda na UFT.",
      },

      {
        name: "Luis Guilherme Costa Berti, Me.",
        info: "(doutorando na FAAC/UNESP Bauru) - cadastro 007 - lg.berti@unesp.br - <currículo> - <orcid> - ETPs de maior interesse: 3, 13 e 14. Formação: Doutorando em Comunicação (UNESP); Mestre em Ciências/Agronegócios (UNESP). Graduação em Direito (FADAP). Especialização em Direitos Humanos, Responsabilidade Social e Cidadania Global (PUC/RS). Atuação: Doutorando na UNESP.",
      },

      {
        name: "Mailson Lima Nazaré, Me.",
        info: "(UEPA e UFPA) - cadastro 093 - marajo140379@gmail.com - <currículo> - <orcid> - ETPs de interesse: 1. Formação: Mestrado em Estudos Antrópicos na Amazônia. Graduação em Pedagogia. Atuação: Professor na Universidade do Estado do Pará e Doutorando em Geografia na Universidade Federal do Pará.",
      },

      {
        name: "Marcos Roberto Terra de Oliveira, Bel.",
        info: "(Secretaria de Educação de São Paulo) - cadastro 003 - marcos.terra-oliveira@unesp.br - <currículo> - <orcid> - ETPs de interesse: 1, 12 e 17. Formação: Mestrando em Comunicação (UNESP); Graduações em Geografia (UNISAGRADO) e em Pedagogfia (UNINOVE); . Especialização em Supervisão Escolar. Atuação: Professor do Ensino Médio em Bauru/SP.",
      },

      {
        name: "Maria Rita de Cássia Oliveira, Me.",
        info: "(Rede Mulheres de Axé do Brasil) - cadastro 059 - mariaritarn@gmail.com - <currículo> - ETPs de interesse: 1, 3, 5, 10, 12, 13, 14 e 18. Formação: Mestre em Ciências Sociais (UFRN). Graduação em Ciências Sociais (UERN). Especialização em História e Cultura Indígena e Afro-brasileira (FAMART). Atuação: Coordenadora da Rede Mulheres de Axé do Brasil.",
      },

      {
        name: "Milene Silva Ferreira, Bel.",
        info: "(Mestranda na UFPA) - cadastro 081 - milenesilvaufpa@gmail.com - <currículo> - ETPs de interesse: 20. Formação: Mestranda em Estudos em Etnobiodiversidade (UFPA). Atuação: Mestranda em Estudos de Etnobiodiversidade (UFPA).",
      },

      {
        name: "Nicholas Augusto Mendes da Rocha Lima, Me.",
        info: "(Doutorando na UFRRJ) - cadastro 086 - nicholasm98@ufrrj.br - <currículo> - <orcid> - ETPs de interesse: 12, 17 e 20. Formação: Mestrado em Desenvolvimento Territorial e Políticas Públicas PPGDT/UFRRJ. Graduação em Economia (UFRRJ). Atuação: Doutorando em Ciência, Tecnologia e Inovação em Agropecuária (PPGCTI/UFRRJ).",
      },

      {
        name: "Patrícia Albuquerque Medeiros, Me.",
        info: "(Doutoranda UFRN) - cadastro 067 - patriciaamedeiros@hotmail.com - <currículo> - ETPs de interesse: 1, 12 e 17. Formação: Mestre em Política Social (UFPB). Graduação em Serviço Social (UFPB) e em Geoprocessamento (UFPB). Especialização em Docência para a Educação Profissional e Tecnológica (IFPB). Atuação: Doutoranda UFRN e Comissão Antirracista da Associação Brasileira de Estudos e Pesquisas em Serviço Social - ABEPSS.",
      },

      {
        name: "Patrícia Cristina Melero Pereira Leite, Me.",
        info: "(Doutoranda UNESP Tupã/SP) - cadastro 077 - patricia.melero@unesp.br - <currículo> - <orcid> - ETPs de interesse: 12. Formação: Mestre em Ciências/Agronegócio e Desenvolvimento (UNESP). Graduação em Arquitetura e Urbanismo (FACCAT) e em Gestão de Negócios (UNIVEM). Atuação: Doutoranda em Ciências/Agronegócio e Desenvolvimento (UNESP/Tupã - SP).",
      },

      {
        name: "Rafaela Rosa Chaves Cardoso, Me.",
        info: "(Doutoranda UFRRJ) - cadastro 087 - rafaelaadmpublica@gmail.com - <currículo> - <orcid> - ETPs de interesse: 17. Formação: Mestrado em Políticas Públicas e Desenvolvimento Territorial (UFRRJ). Graduação em Administração Pública (UFRRJ). Graduação em Arquitetura e Urbanismo (FACCAT). Graduação em Gestão de Negócios (UNIVEM). Atuação: Pessquisadora do PEPEDT/UFRRJ e doutoranda pelo PPGCTIA/UFRRJ.",
      },

      {
        name: "Raimunda Gomes Maciel, Me.",
        info: "(Doutoranda na UNAMA) - cadastro 050 - raimunda_gonalves@yahoo.com.br - <currículo> - <orcid> - ETPs de interesse: 2, 6 e 13. Formação: Doutoranda em Comunicação, Linguagem e Cultura (UNAMA). Mestre em Gestão de Recursos Naturais (UFPA). Graduação em Letras/Português/Inglês. Especializações em Educação de Jovens e Adultos (UFPA) e em Gestão Escolar (Faculdade Tapajós). Atuação: Professora nos municípios de Igarapé Mirim e Barcarena (PA); doutoranda na UNAMA).",
      },

      {
        name: "Ronélia do Nascimento, Me.",
        info: "(UNEMAT) - cadastro 017 - ronelia.do.nasciment@unemat.br - <currículo> - ETPs de interesse: 1 e 3. Formação: Mestrado em Educação (UNEMAT); Graduação em Pedagogfia (UNEMAT); . Especialização em Pedagogia e Psicopedagogia Institucional (UNICID) e em Diversidade (UNEMAT). Atuação: Docente na (UNEMAT).",
      },

      {
        name: "Telma Lima da Cunha Ramos, Me.",
        info: "(EBTT/IFAM/IFBA) - cadastro 049 - tlcramos.ifba@gmail.com - <currículo> - <orcid> - ETPs de interesse: 2, 4 e 15. Formação: Doutoranda em Antropologia (FCTUC/UC/Pt). Doutoranda em Educação na Amazônia (UFAM). Mestre em Sociedade e Cultura na Amazônia (UFAM). Mestre em Educação (UFAM). Graduação em Pedagogia (Instituto Adventista de Ensino/SP). Atuação: Professora no EBITT/IFAM/IFBA.",
      },

      {
        name: "Telma Maria Maine Manuel, Bel.",
        info: "(xxxxxxxxxxxxxx) - cadastro 0xx - telmammmanuel@gmail.com - <currículo> - <orcid> - ETPs de interesse: xx, xx e xx. Formação: Mestr nonnonononnononn. Atuação: Nono nononon nono - ARQUIVO CORROMPIDO (aguardando a pesquisadora preencher novo formulário).",
      },

      {
        name: "Thaís Andréa Cunha, Bel.",
        info: "(Consultora Autônoma) - cadastro 061 - thaiscunha1004@hotmail.com - <currículo> - ETPs de interesse: 1, 10 e 15. Formação: Graduação em Administração com ênfase em Recursos Humanos (UNINOVE). Pós-Graduação Latu Sensu em Ergonomia, Acessibilidade e Segurança do Trabalho (UNINTER), Habilitação Técnica em Segurança do Trabalho (ETEC Takashi Morita). Atuação: Consultora/Especialista em Ergonomia, Acessibilidade e Segurança do Trabalho.",
      },

      {
        name: "Thatiana Rodrigues Saqueto, Bel.",
        info: "(Prefeitura Municipal de Bauru e UNESP) - cadastro 092 - t.saqueto@unesp.br - <currículo> - ETPs de interesse: 17. Formação: Graduação em Jornalismo (UNISAGRADO). Mestranda pela PPGCOM/Unesp de Bauru. Atuação: Mestranda na UNESP Bauru.",
      },

      {
        name: "Valquíria Cristina Martins, Me.",
        info: "(Doutoranda na UNESP/Tupã e Educadora no Museu Histórico e Pedagógico Índia Vanuíre/Tupã SP) - cadastro 037 - valcrismar@gmail.com - <currículo> - <orcid> - ETPs de interesse: 1, 3 e 16. Formação: Doutoranda em Ciências/Agronegócio e Desenvolvimento (UNESP); Mestra em Ciências/Agronegócio e Desenvolvimento (UNESP); Graduação em Pedagogia (FACCAT). Especializações em Psicopedagogia Educacional e Empresarial (FACCAT) e em LIBRAS e metodologias de Ensino para alunos surdos (FACCAT). Atuação: Doutoranda em Ciências/Agronegócio e Desenvolvimento (UNESP Tupã) e Educadora Museologa no Museu H. P. Índia Vanuíre (Tupã/SP).",
      },

      {
        name: "Victor Hugo Silva Souza, Bel.",
        info: "(Mestrando na UNESP/Tupã) - cadastro 058 - vhs.souza@unesp.br - <currículo> - <orcid> - ETPs de interesse: 1, 11 e 19. Formação: Mestrando em Ciências/Agronegócio e Desenvolvimento (UNESP); Graduação em História (UNIFAI). Atuação: Mestrando em Ciências/Agronegócio e Desenvolvimento (UNESP Tupã); intregrante da Comissão de Internacionalização da RedeCT.",
      },

      {
        name: "Wellington de Arruda Jacob, Bel.",
        info: "(Mestrando na UNESP/Sorocaba) - cadastro 032 - wellington.jacob@unesp.br - <currículo> - ETPs de interesse: 1, 5 e 13. Formação: Mestrando em Ciências do Ambiente (UNESP/Sorocaba); Graduação em Psicologia; Especialização em Gestão de Políticas Sociais (UNIP). Atuação: Mestrando em Ciências do Ambiente (UNESP de Sorocaba).",
      },
    ],
  },
  {
    type: "Pesquisador Júnior",
    members: [
      {
        name: "Anne Verônica Mota de Castilho",
        info: " (graduanda na UNESP Bauru) - cadastro 056 - anne.castilho@unesp.br - <currículo> - ETPs de maior interesse: 3, 13 e 22. Formação: Graduanda em Relações Públicas na FAAC/UNESP Bauru. Atuação: voluntária na equipe da RedeCT",
      },

      {
        name: "Bárbara Caroline Ferreira Figueiredo",
        info: "(graduanda na UNESP Bauru) - cadastro 042 - barbara.cf.figueiredo@unesp.br - <currículo> - ETPs de maior interesse: 2 e 22. Formação: Graduanda em Relações Públicas na FAAC/UNESP Bauru. Atuação: voluntária na equipe da RedeCT",
      },
    ],
  },
  {
    type: "Membro Honorário",
    members: [
      {
        name: "Valdivino Marques Sobrinho",
        info: "(Associação de Moradores da Comunidade Tradicional da Matinha) - cadastro 00X - Representante da Comunidade Tradicional de Geraizeiros da Matinha (Guaraí/TO) - nonono@unesp.br - <currículo> - <orcid> - Áreas de maior interesse: (1) Nonono, (2) Nonono, (3) Nonono, (4) Sociologia, (5) Nonono. Formação: Técnico em Meio Ambiente.",
      },
    ],
  },
];

export async function getPesquisadores() {
  return categorias;
}
