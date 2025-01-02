import { Injectable } from '@angular/core';

interface Post{
  id: number;
  title: string;
  descricaoTitle: string;
  blocos: {
    title: string;
    descricao: string;
    lista?: Bloco[]
  }[],
  cargo: string,
  photoPath: string,
  autor: string,
  data: Date,
  tema: string
}

interface Bloco{
  title: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() {}

  allPosts: Post[] = [
    {
      id:1,
      title: 'Unha Encravada: O Fim da Dor e o Começo da Liberdade para Seus Pés!',
      descricaoTitle: 'Você já sentiu aquela dor latejante e incômoda na ponta do dedo? Aquela sensação de que algo está errado, de que você não pode usar seu sapato favorito ou até mesmo andar direito? Se a resposta for sim, você provavelmente está sofrendo com a unha encravada. Mas não se desespere! Chegou a hora de dar adeus à dor e ao desconforto e dizer olá para pés saudáveis e livres de preocupações.',
      blocos: [
        {title: 'O que é Unha Encravada?', descricao: 'A unha encravada, também conhecida como onicocriptose, é uma condição comum e dolorosa que ocorre quando a borda da unha cresce e penetra na pele ao redor, causando inflamação, vermelhidão e, em casos mais graves, infecção.'},
        {
          title: 'Por que Você Deve se Preocupar?', 
          descricao: 'Além da dor insuportável, a unha encravada pode trazer uma série de complicações, como: ', 
          lista: [
            {title: 'Infecções: ', descricao: 'A área inflamada pode ser facilmente infectada por bactérias, causando dor intensa, pus e até mesmo febre.'},
            {title: 'Dificuldade para caminhar: ',descricao: 'A dor e o inchaço podem dificultar a realização de atividades simples do dia a dia, como caminhar e usar sapatos.'},
            {title: 'Problemas estéticos: ',descricao: 'A unha encravada pode causar deformidades na unha e na pele ao redor, afetando a aparência dos seus pés.'},
            {title: 'Granuloma piogênico: ',descricao: 'Em casos mais graves, pode ocorrer o desenvolvimento de um granuloma piogênico, um tumor benigno que se forma na área afetada.'},
          ]},
          {title: 'Chega de Sofrimento! Descubra a Solução Definitiva!', descricao: 'A boa notícia é que existe uma solução eficaz e definitiva para a unha encravada. Com o tratamento adequado, você pode se livrar da dor, evitar complicações e voltar a ter pés saudáveis e bonitos.'},
          {
            title: 'Nossos Especialistas Estão Prontos para Ajudar!', 
            descricao: 'Nossa equipe de especialistas em podologia está pronta para te ajudar a se livrar da unha encravada de uma vez por todas. Oferecemos um tratamento completo e personalizado, que inclui:',
            lista: [
              {title: 'Avaliação detalhada: ', descricao: 'Um exame minucioso para identificar a causa da unha encravada e determinar o melhor tratamento para o seu caso.'},
              {title: 'Procedimento seguro e eficaz: ', descricao: 'Técnicas avançadas e indolores para remover a parte da unha que está encravada e prevenir o reaparecimento do problema.'},
              {title: 'Orientação e acompanhamento: ', descricao: 'Dicas e cuidados para manter seus pés saudáveis e evitar o retorno da unha encravada.'}
            ]
          },
          {title: 'Não Espere Mais! Agende Sua Consulta Agora Mesmo!', descricao: 'Não deixe a unha encravada controlar sua vida. Recupere sua liberdade, seu conforto e sua autoestima. Agende sua consulta com nossos especialistas e dê o primeiro passo para uma vida sem dor e com pés saudáveis.'},
          {title: 'Seu Bem-Estar é Nossa Prioridade!', descricao: 'Invista em você, invista na sua saúde e bem-estar. Diga adeus à unha encravada e abrace uma vida mais leve e feliz. Agende sua consulta agora e experimente a diferença!'}
      ],
      autor: 'Fátima Soares',
      cargo: 'Fundadora / CEO',
      photoPath: 'assets/perfil.webp',
      data: new Date(2024, 6, 11),
      tema: 'Unha Encravada'
    },
    {
      id: 2,
      title: 'Quando Procurar uma Podóloga: Dê Adeus aos Problemas nos Pés e Caminhe com Leveza e Conforto!',
      descricaoTitle: 'Seus pés pedem socorro? Sente dores, desconforto ou incômodos que te impedem de realizar suas atividades diárias com tranquilidade? Não ignore esses sinais! Seus pés merecem atenção e cuidado especializado.',
      blocos: [
        {title: 'Por que a Podologia é Essencial para Seus Pés?', descricao: 'A podologia é a área da saúde dedicada ao cuidado e tratamento dos pés. Uma podóloga é a profissional capacitada para diagnosticar, prevenir e tratar diversas condições que afetam a saúde e o bem-estar dos seus pés.'},
        {
          title: 'Sinais de que Você Precisa de uma Podóloga:', 
          descricao: '',
          lista: [
            {title: 'Unhas encravadas', descricao: 'Dor, inflamação e vermelhidão na região da unha podem indicar uma unha encravada, que requer tratamento especializado para evitar infecções e complicações.'},
            {title: 'Calos e calosidades: ', descricao: 'Essas áreas endurecidas e dolorosas podem ser causadas por atrito e pressão excessivos. Uma podóloga pode removê-los com segurança e indicar medidas preventivas.'},
            {title: 'Micoses (fungos): ', descricao: 'Coceira, descamação, bolhas e alterações na cor e textura das unhas podem ser sinais de micose. O tratamento precoce é fundamental para evitar a disseminação da infecção.'},
            {title: 'Rachaduras e fissuras: ', descricao: 'Rachaduras nos calcanhares e entre os dedos podem ser dolorosas e aumentar o risco de infecções. Uma podóloga pode tratar essas lesões e orientar sobre cuidados preventivos.'},
            {title: 'Alterações nas unhas: ', descricao: 'Unhas amareladas, espessadas, deformadas ou com manchas podem indicar problemas de saúde subjacentes, como diabetes ou doenças circulatórias.'},
            {title: 'Dores nos pés: ', descricao: 'Dores nos pés podem ter diversas causas, como fascite plantar, esporão de calcâneo ou problemas posturais. Uma podóloga pode identificar a causa da dor e indicar o tratamento adequado.'},
            {title: 'Pé diabético: ', descricao: 'Pessoas com diabetes precisam de cuidados especiais com os pés para prevenir complicações. A podóloga é fundamental para o acompanhamento e prevenção de problemas.'},
          ]
        },
        {title: 'Não Espere Mais! Agende Sua Consulta com uma Podóloga!', descricao: 'Cuidar dos seus pés é investir em sua saúde e bem-estar. Agende sua consulta com uma podóloga e descubra como ter pés saudáveis, bonitos e livres de dores.'},
        {
          title: 'Nossos Serviços:', 
          descricao: '',
          lista: [
            {title: '', descricao: 'Avaliação completa da saúde dos pés'},
            {title: '', descricao: 'Tratamento de unhas encravadas, calos, calosidades e micoses'},
            {title: '', descricao: 'Hidratação e cuidados com a pele dos pés'},
            {title: '', descricao: 'Orientações sobre cuidados preventivos e uso de calçados adequados'},
            {title: '', descricao: 'Tratamento de pé diabético e outras condições específicas'},
          ]
        },
        {title: 'Invista em Seus Pés, Invista em Você!', descricao: ''}
      ],
      autor: 'Fátima Soares',
      cargo: 'Fundadora / CEO',
      photoPath: 'assets/perfil.webp',
      data: new Date(2024, 6, 11),
      tema: 'Podologia'
    },
    {
      id: 3,
      title: 'Pés Rachados: Diga Adeus à Pele Ressecada e Conquiste Pés Macios!',
      descricaoTitle: 'Seus pés estão gritando por socorro? Rachaduras, ressecamento e aspereza te impedem de exibir seus pés com confiança? Não se preocupe, você não está sozinha(o)!',
      blocos: [
        {title: 'Por Que Seus Pés Estão Rachados?', descricao: 'A pele dos pés é naturalmente mais espessa e sujeita a atrito constante. Fatores como ressecamento, falta de hidratação, uso de calçados inadequados, excesso de peso e até mesmo algumas condições de saúde, como diabetes e hipotireoidismo, podem contribuir para o aparecimento de rachaduras.'},
        {title: 'As Consequências de Ignorar o Problema', descricao: 'Além do aspecto estético desagradável, pés rachados podem causar dor, desconforto e até mesmo infecções. As rachaduras profundas podem sangrar e se tornarem porta de entrada para bactérias e fungos, colocando em risco a saúde dos seus pés.'},
        {title: 'A Solução Definitiva para Pés Macios e Saudáveis', descricao: 'Chega de esconder seus pés! Com o tratamento adequado, você pode conquistar pés macios, hidratados e livres de rachaduras. Apresentamos o Creme Regenerador para Pés Rachados, a solução definitiva para transformar seus pés e sua autoestima.'},
        {title: 'O Segredo da Fórmula Exclusiva', descricao: 'O Creme Regenerador para Pés Rachados possui uma fórmula exclusiva, rica em ingredientes naturais e poderosos, como:', 
          lista: [
            {title: 'Ureia', descricao: 'Hidrata profundamente, amacia a pele e promove a renovação celular.'},
            {title: 'Óleo de coco', descricao: 'Nutre, hidrata e forma uma barreira protetora contra o ressecamento.'},
            {title: 'Manteiga de karité', descricao: 'Acalma, suaviza e restaura a elasticidade da pele.'},
            {title: 'Vitamina E', descricao: 'Antioxidante poderoso que protege a pele dos radicais livres e previne o envelhecimento precoce.'},
          ]
        },
        {title: 'Não perca tempo! Agende sua sessão agora mesmo e comece a trilhar o caminho para uma vida mais leve e feliz!', descricao: ''}
      ],
      autor: 'Fátima Soares',
      cargo: 'Fundadora / CEO',
      photoPath: 'assets/perfil.webp',
      data: new Date(2024, 6, 11),
      tema: 'Pés Rachados'
    },
    {
      id: 4,
      title: 'Tudo que Você Precisa Saber Sobre Reflexologia: Desvende o Caminho Natural para o Alívio e Bem-Estar',
      descricaoTitle: 'Você já se sentiu sobrecarregado pelo estresse, dores crônicas ou simplesmente exausto? Se a resposta for sim, a reflexologia pode ser a chave para transformar sua vida. Descubra como essa técnica milenar pode trazer alívio, relaxamento e bem-estar de forma natural e eficaz.',
      blocos: [
        {title: 'O que é Reflexologia?', descricao: 'A reflexologia é uma terapia complementar que se baseia na aplicação de pressão em pontos específicos dos pés, mãos e orelhas, que correspondem a diferentes órgãos e sistemas do corpo. Ao estimular esses pontos, a reflexologia promove o equilíbrio energético, alivia dores, reduz o estresse e melhora a saúde de forma geral.'},
        {title: 'Benefícios que Vão Além do Relaxamento', descricao: '', 
          lista: [
            {title: 'Alívio de dores', descricao: 'Dores nas costas, dores de cabeça, dores menstruais e outras dores crônicas podem ser significativamente reduzidas com a reflexologia.'},
            {title: 'Redução do estresse e ansiedade', descricao: 'A reflexologia promove o relaxamento profundo, aliviando a tensão muscular e mental, e proporcionando uma sensação de calma e bem-estar.'},
            {title: 'Melhora da circulação sanguínea', descricao: 'A estimulação dos pontos reflexos melhora a circulação sanguínea, o que é essencial para a saúde de todo o corpo.'},
            {title: 'Fortalecimento do sistema imunológico', descricao: 'A reflexologia ajuda a fortalecer as defesas do organismo, tornando-o mais resistente a doenças.'},
            {title: 'Melhora do sonoo', descricao: 'Se você sofre com insônia ou sono de má qualidade, a reflexologia pode te ajudar a ter noites mais tranquilas e revigorantes.'},
            {title: 'Equilíbrio emocional', descricao: 'A reflexologia promove o equilíbrio emocional, ajudando a lidar com o estresse, a ansiedade e a depressão.'},
          ]
        },

        {title: 'A Reflexologia é para Você?', descricao: 'Se você busca uma forma natural e eficaz de cuidar da sua saúde e bem-estar, a reflexologia é a resposta. Seja para aliviar dores, reduzir o estresse, melhorar o sono ou simplesmente relaxar, a reflexologia oferece uma experiência única e transformadora.'},
        {title: 'Experimente a Reflexologia e Transforme Sua Vida', descricao: 'Não espere mais para experimentar os benefícios da reflexologia. Agende uma sessão com um profissional qualificado e descubra como essa técnica milenar pode transformar sua vida.'},
        {title: 'Invista em Você, Invista em Reflexologia!', descricao: 'A reflexologia é um investimento em sua saúde e bem-estar. Ao cuidar do seu corpo e mente de forma natural, você estará investindo em uma vida mais feliz, saudável e equilibrada.'},
        {title: 'Não perca tempo! Agende sua sessão de reflexologia agora mesmo e comece a trilhar o caminho para uma vida mais leve e feliz!', descricao: ''}
      ],
      autor: 'Fátima Soares',
      cargo: 'Fundadora / CEO',
      photoPath: 'assets/perfil.webp',
      data: new Date(2024, 7, 13),
      tema: 'Reflexologia'
    }
  ]

}
