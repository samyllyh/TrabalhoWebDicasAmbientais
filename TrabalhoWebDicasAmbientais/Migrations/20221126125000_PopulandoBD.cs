using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TrabalhoWebDicasAmbientais.Migrations
{
    public partial class PopulandoBD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("insert into Dicas(Titulo, Descrição) Values('Plante árvores', 'A cada ano, aproximadamente 12 milhões de hectares de floresta são destruídos e esse desmatamento, unido à agricultura e outras conversões de terras, é responsável por cerca de 25% das emissões globais de gases de efeito estufa. Todos e todas podemos desempenhar um papel em reverter essa tendência por meio da plantação de árvores, como um trabalho individual ou coletivo')");
            migrationBuilder.Sql("insert into Dicas(Titulo, Descrição) Values('Dissemine informações', 'Encoraje amigos, familiares e colegas de trabalho a reduzir a pegada de carbono. Junte-se a movimentos como o Count Us In (Conte conosco, na tradição literal), que visa inspirar um bilhão de pessoas a tomar medidas práticas e desafiar lideranças a reagir de forma mais corajosa à mudança climática. A organização da plataforma afirma que, se um bilhão de pessoas entrassem em ação, até 20% das emissões globais de carbono poderiam ser reduzidas.')");
            migrationBuilder.Sql("insert into Dicas(Titulo, Descrição) Values('Faça pressão política', 'Pressione políticos e empresas locais a se empenharem na eliminação e redução da poluição por carbono. O Count Us In oferece algumas dicas úteis para fazer isso. Escolha um assunto ambiental do seu interesse, decida uma demanda específica e marque uma reunião com a representação local. Pode parecer intimidante, mas sua voz merece ser ouvida. Se a humanidade pretende ser bem sucedida no combate à emergência climática, os políticos têm de ser parte da solução. Cabe a todos e todas nós manter a pressão.')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("Delete from Dicas");
        }
    }
}