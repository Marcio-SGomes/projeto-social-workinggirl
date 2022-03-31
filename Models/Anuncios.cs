using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoEntrega15_02.Models
{
    [Table("Anuncios")]
    public class Anuncios
    {
        [Column("Id")]
        [Display(Name = "Código do Anuncio")]
        public int Id { get; set; }
        [Column("UserId")]
        [Display(Name = "Usuário")]
        public string UserId { get; set; }
        [Column("Titulo")]
        [Display(Name = "Titulo")]
        public string Titulo { get; set; }
        [Column("Descricao")]
        [Display(Name = "Descrição")]
        public string Descricao { get; set; }
        [Column("Valor")]
        [Display(Name = "Valor")]
        public decimal Valor { get; set; }
        [Column("ImagemUrl")]
        [Display(Name = "Imagem")]
        public string ImagemUrl { get; set; }
        [Column("Cidade")]
        [Display(Name = "Cidade")]
        public string Cidade { get; set; }
        [Column("Estado")]
        [Display(Name = "Estado")]
        public string Estado { get; set; }

    }
}
