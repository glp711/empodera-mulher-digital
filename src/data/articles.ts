export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image?: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "apps-organizar-rotina-2025",
    title: "10 aplicações gratuitas para organizar a sua rotina em 2025",
    excerpt: "Descubra as melhores apps para planear o seu dia, aumentar a produtividade e manter-se organizada.",
    content: `
      <p>A organização da rotina diária é fundamental para o sucesso pessoal e profissional. Com a chegada de 2025, novas aplicações surgiram para nos ajudar a gerir melhor o nosso tempo e tarefas.</p>
      
      <h2>1. Notion - O seu escritório digital</h2>
      <p>O Notion continua a ser uma das ferramentas mais versáteis para organização pessoal. Permite criar bases de dados, calendários, listas de tarefas e muito mais numa única plataforma.</p>
      
      <h2>2. Todoist - Gestão de tarefas inteligente</h2>
      <p>Com funcionalidades de IA e sincronização entre dispositivos, o Todoist ajuda-a a manter-se no topo das suas responsabilidades.</p>
      
      <h2>3. Forest - Concentração gamificada</h2>
      <p>Esta app única combina produtividade com consciência ambiental, plantando árvores virtuais enquanto se mantém focada nas suas tarefas.</p>
      
      <h2>Como escolher a app ideal?</h2>
      <p>Considere as suas necessidades específicas: precisa de sincronização em equipa? Prefere interfaces simples ou complexas? Teste várias opções antes de se decidir.</p>
      
      <p>A chave para o sucesso com qualquer app de organização é a consistência. Escolha uma que se adapte ao seu estilo de vida e use-a regularmente.</p>
    `,
    category: "Produtividade & Carreira",
    author: "Ana Silva",
    publishedAt: "2025-01-15",
    readTime: "5 min",
    tags: ["Apps", "Produtividade", "Organização", "Rotina"]
  },
  {
    id: "apps-ciclo-menstrual",
    title: "Melhores apps para mulheres controlarem o ciclo menstrual",
    excerpt: "Apps essenciais para acompanhar o seu ciclo, prever a menstruação e cuidar da sua saúde íntima.",
    content: `
      <p>O acompanhamento do ciclo menstrual é fundamental para a saúde feminina. As aplicações modernas oferecem muito mais do que simples calendários.</p>
      
      <h2>Clue - Ciência e simplicidade</h2>
      <p>Baseada em investigação científica, a Clue oferece previsões precisas e insights sobre o seu corpo sem estereótipos cor-de-rosa.</p>
      
      <h2>Flo - Saúde integral da mulher</h2>
      <p>Para além do ciclo, a Flo acompanha sintomas, humor, peso e oferece artigos educativos sobre saúde feminina.</p>
      
      <h2>Natural Cycles - Contraceptivo digital</h2>
      <p>Aprovada como dispositivo médico, esta app pode ser usada como método contraceptivo natural quando usada corretamente.</p>
      
      <h2>Dicas importantes</h2>
      <ul>
        <li>Registe dados consistentemente para previsões mais precisas</li>
        <li>Use as apps como complemento, não substituto, de consultas médicas</li>
        <li>Personalize as definições conforme as suas necessidades</li>
      </ul>
    `,
    category: "Bem-Estar & Vida Digital",
    author: "Dr. Maria Santos",
    publishedAt: "2025-01-12",
    readTime: "4 min",
    tags: ["Saúde Feminina", "Apps", "Ciclo Menstrual", "Bem-estar"]
  },
  {
    id: "produtividade-teletrabalho",
    title: "Como aumentar a produtividade no teletrabalho",
    excerpt: "Estratégias comprovadas para manter o foco e a eficiência enquanto trabalha a partir de casa.",
    content: `
      <p>O teletrabalho trouxe flexibilidade, mas também novos desafios de produtividade. Aprenda a otimizar o seu ambiente de trabalho em casa.</p>
      
      <h2>Crie um espaço dedicado</h2>
      <p>Mesmo num apartamento pequeno, delimite um espaço exclusivo para o trabalho. Isto ajuda o cérebro a entrar em "modo trabalho".</p>
      
      <h2>Estabeleça uma rotina matinal</h2>
      <p>Vista-se como se fosse sair de casa. Esta simples ação sinaliza ao cérebro que é hora de trabalhar.</p>
      
      <h2>Use a técnica Pomodoro</h2>
      <p>Trabalhe em blocos de 25 minutos com pausas de 5 minutos. Esta técnica mantém a concentração alta durante todo o dia.</p>
      
      <h2>Gerir distrações digitais</h2>
      <ul>
        <li>Silencie notificações não essenciais</li>
        <li>Use apps de bloqueio de sites durante o horário de trabalho</li>
        <li>Mantenha o telemóvel noutra divisão</li>
      </ul>
      
      <h2>Comunicação eficaz</h2>
      <p>Mantenha contacto regular com a equipa através de videochamadas e mensagens. A comunicação clara evita mal-entendidos.</p>
    `,
    category: "Produtividade & Carreira",
    author: "Carolina Ferreira",
    publishedAt: "2025-01-10",
    readTime: "6 min",
    tags: ["Teletrabalho", "Produtividade", "Home Office", "Carreira"]
  },
  {
    id: "apps-financas-pessoais",
    title: "5 aplicações para gerir melhor as suas finanças pessoais",
    excerpt: "Controle os seus gastos, poupe mais e invista melhor com estas apps essenciais de gestão financeira.",
    content: `
      <p>A gestão financeira pessoal é uma competência essencial. Estas aplicações tornam mais fácil controlar gastos e alcançar objetivos financeiros.</p>
      
      <h2>YNAB (You Need A Budget)</h2>
      <p>Focada no orçamento proativo, ensina-a a dar um propósito a cada euro antes de o gastar. Ideal para quem quer mudar hábitos financeiros.</p>
      
      <h2>Mint - Visão completa das finanças</h2>
      <p>Conecta todas as suas contas bancárias numa só app, categorizando gastos automaticamente e enviando alertas de orçamento.</p>
      
      <h2>Toshl Finance - Gamificação financeira</h2>
      <p>Torna a gestão financeira divertida com gráficos coloridos e metas alcançáveis. Perfeita para iniciantes.</p>
      
      <h2>Dicas para começar</h2>
      <ul>
        <li>Conecte todas as suas contas para uma visão completa</li>
        <li>Defina categorias de gastos claras</li>
        <li>Estabeleça objetivos de poupança realistas</li>
        <li>Reveja os relatórios mensalmente</li>
      </ul>
      
      <p>Lembre-se: a melhor app é aquela que usa consistentemente. Comece com funcionalidades básicas e vá evoluindo.</p>
    `,
    category: "Finanças Pessoais",
    author: "Rita Oliveira",
    publishedAt: "2025-01-08",
    readTime: "7 min",
    tags: ["Finanças", "Apps", "Orçamento", "Poupança", "Investimentos"]
  },
  {
    id: "ansiedade-digital-smartphone",
    title: "Como evitar a ansiedade digital e usar o telemóvel de forma saudável",
    excerpt: "Estratégias para desenvolver uma relação mais equilibrada com a tecnologia e reduzir o stress digital.",
    content: `
      <p>A ansiedade digital é um problema crescente. Aprenda a usar a tecnologia a seu favor, não contra si.</p>
      
      <h2>Reconheça os sinais</h2>
      <p>FOMO (medo de perder algo), verificação compulsiva de notificações e dificuldade em desligar são sinais de uma relação pouco saudável com a tecnologia.</p>
      
      <h2>Crie limites digitais</h2>
      <ul>
        <li>Defina horários livres de telemóvel</li>
        <li>Use o modo "Não Incomodar" regularmente</li>
        <li>Remova apps que causam ansiedade</li>
        <li>Crie uma rotina noturna sem ecrãs</li>
      </ul>
      
      <h2>Pratique o minimalismo digital</h2>
      <p>Desinstale apps desnecessárias, organize o ecrã inicial com apenas o essencial e desative notificações não urgentes.</p>
      
      <h2>Alternativas saudáveis</h2>
      <p>Substitua o scrolling sem fim por atividades que nutrem: leitura, exercício, meditação ou conversas presenciais.</p>
      
      <h2>Apps que ajudam</h2>
      <ul>
        <li>Moment - para monitorizar o tempo de ecrã</li>
        <li>Headspace - para meditação guiada</li>
        <li>Forest - para manter o foco longe do telemóvel</li>
      </ul>
    `,
    category: "Bem-Estar & Vida Digital",
    author: "Dr. Sofia Costa",
    publishedAt: "2025-01-05",
    readTime: "8 min",
    tags: ["Bem-estar Digital", "Ansiedade", "Smartphone", "Saúde Mental"]
  },
  {
    id: "ferramentas-estudantes-2025",
    title: "Top 7 ferramentas online para estudantes em 2025",
    excerpt: "Descubra as melhores plataformas digitais para otimizar os seus estudos e alcançar melhores resultados académicos.",
    content: `
      <p>O ensino moderno exige ferramentas modernas. Estas plataformas revolucionam a forma como estudamos e aprendemos.</p>
      
      <h2>1. Notion - O caderno digital definitivo</h2>
      <p>Organize apontamentos, crie bases de dados de matérias e planei os estudos numa única plataforma flexível.</p>
      
      <h2>2. Anki - Repetição espaçada científica</h2>
      <p>Baseado em investigação neurocientífica, o Anki otimiza a memorização através de flashcards inteligentes.</p>
      
      <h2>3. Grammarly - Escrita impecável</h2>
      <p>Melhore a qualidade dos seus trabalhos com correção automática de gramática e sugestões de estilo.</p>
      
      <h2>4. Khan Academy - Aprendizagem gratuita</h2>
      <p>Cursos completos em diversas áreas, desde matemática a programação, todos gratuitos e de alta qualidade.</p>
      
      <h2>5. Coursera - Cursos universitários online</h2>
      <p>Acesso a cursos de universidades prestigiadas mundialmente, muitos com certificados reconhecidos.</p>
      
      <h2>Dicas de estudo digital</h2>
      <ul>
        <li>Combine várias ferramentas conforme as suas necessidades</li>
        <li>Mantenha uma organização digital consistente</li>
        <li>Faça backups regulares dos seus materiais</li>
        <li>Use técnicas de estudo ativo mesmo no digital</li>
      </ul>
    `,
    category: "Tecnologia no Dia a Dia",
    author: "Prof. Laura Mendes",
    publishedAt: "2025-01-03",
    readTime: "6 min",
    tags: ["Educação", "Estudos", "Ferramentas Online", "Tecnologia"]
  },
  {
    id: "gestao-tempo-mulheres-empreendedoras",
    title: "Guia completo de gestão de tempo para mulheres empreendedoras",
    excerpt: "Estratégias avançadas para equilibrar vida pessoal, profissional e empreendedorial sem sacrificar o bem-estar.",
    content: `
      <p>Ser empreendedora exige uma gestão de tempo excecional. Este guia oferece estratégias testadas por mulheres de sucesso.</p>
      
      <h2>Matriz de Eisenhower adaptada</h2>
      <p>Classifique tarefas em: Urgente/Importante (fazer já), Importante/Não Urgente (programar), Urgente/Não Importante (delegar), Nem Urgente nem Importante (eliminar).</p>
      
      <h2>Time blocking estratégico</h2>
      <p>Reserve blocos específicos para: trabalho focado, reuniões, desenvolvimento pessoal, família e autocuidado. Trate estes blocos como compromissos inegociáveis.</p>
      
      <h2>A regra dos 3 grandes</h2>
      <p>Todos os dias, identifique as 3 tarefas mais importantes para o seu negócio. Complete-as antes de qualquer outra coisa.</p>
      
      <h2>Automação inteligente</h2>
      <ul>
        <li>Use ferramentas como Zapier para conectar apps</li>
        <li>Automatize postagens nas redes sociais</li>
        <li>Configure respostas automáticas profissionais</li>
        <li>Use templates para tarefas repetitivas</li>
      </ul>
      
      <h2>Estabeleça limites saudáveis</h2>
      <p>Defina horários claros de trabalho, aprenda a dizer "não" e delegue sempre que possível. O burnout é o inimigo da produtividade.</p>
      
      <h2>Ferramentas essenciais</h2>
      <ul>
        <li>Calendly para agendamentos</li>
        <li>Trello ou Asana para gestão de projetos</li>
        <li>RescueTime para análise de tempo</li>
        <li>Buffer para redes sociais</li>
      </ul>
    `,
    category: "Produtividade & Carreira",
    author: "Beatriz Rodrigues",
    publishedAt: "2025-01-01",
    readTime: "10 min",
    tags: ["Empreendedorismo", "Gestão de Tempo", "Produtividade", "Carreira", "Liderança"]
  }
];

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.slice(0, 4);
};

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};