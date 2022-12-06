using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using TrabalhoWebDicasAmbientais.Context;
using TrabalhoWebDicasAmbientais.Model;

namespace TrabalhoWebDicasAmbientais.Controller
{
    [Route("[controller]")]
    [ApiController]

    public class DicasController : ControllerBase
    {
        //AppDbContext serve para se conectar com o banco de dados
        private readonly AppDbContext _context;

        public DicasController(AppDbContext context)
        {
            _context = context;
        }
        //retornar todos os dados do banco
        [HttpGet]
        public ActionResult<IEnumerable<Dica>> Get()
        {
            try
            {
                return _context.Dicas.AsNoTracking().ToList(); //acessar as dicas
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        //add novas dicas
        [HttpPost]
        public ActionResult Post(Dica dicas)
        {
            try
            {
                _context.Dicas.Add(dicas);
                _context.SaveChanges();

                //esse retorno nos indicas o id que a dica foi salva, retorna o codico 201 em caso de sucesseso 
                return Ok(dicas);
            }
            catch (Exception)
            {
                return BadRequest("dados invalidos");
            }
        }

        //alteracao das dicas completa, tanto o titudo como a descricao, trocar pelo patch se quiser apenas alterar uma das informacoes
        [HttpPut("{id:int}")]
        public ActionResult Put(int id, Dica dica)
        {
            try
            {
                _context.Entry(dica).State = EntityState.Modified;
                _context.SaveChanges();

                return Ok(dica);
            }
            catch (Exception)
            {
                return BadRequest("nao foi possivel alterar dicas");
            }
        }

        //excluir uma dica
        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var dica = _context.Dicas.FirstOrDefault(d => d.DicaId == id);

                _context.Dicas.Remove(dica);
                _context.SaveChanges();

                return Ok(dica);
            }
            catch (Exception)
            {
                return NotFound("produto nao localizado");
            }
        }
    }
}