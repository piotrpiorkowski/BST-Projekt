﻿using AutoMapper;
using BST_Projekt.Data;
using BST_Projekt.Dtos;
using BST_Projekt.Helpers;
using BST_Projekt.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BST_Projekt.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IBstRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IBstRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var userFromRepo = await _repo.GetUser(currentUserId);

            userParams.UserId = currentUserId;
            var users = await _repo.GetUsers(userParams);
            var usersToReturn = _mapper.Map<IEnumerable<UserForPlanerDto>>(users);
            Response.AddPagination(users.CurrentPage, users.PageSize,
                users.TotalCount, users.TotalPages);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {id} failed on save");
        }

        [HttpPost("{id}/like/{recipientId}")]
        public async Task<IActionResult> LikeUser(int id, int recipientId)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                

                return Unauthorized();

            var like = await _repo.GetLike(id, recipientId);

            if (like != null)
                return BadRequest("You already like this user");

            if (await _repo.GetUser(recipientId) == null)
                return NotFound();

            like = new Like
            {
                LikerId = id,
                LikeeId = recipientId
            };

            _repo.Add(like);

            if (await _repo.SaveAll())
                return Ok();

            return BadRequest("Failed to like user");
        }

        [HttpDelete("{id}/like/{recipientId}")]
        public async Task<IActionResult> DeleteLike(int id, int recipientId)
        {
            if ((id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) 
                && (recipientId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)))
                return Unauthorized();

            var likeFromRepo = await _repo.GetLike(id, recipientId);



            if (likeFromRepo.LikerId == id )
                likeFromRepo.LikerDeleted = true;

            if (likeFromRepo.LikeeId == recipientId)
                likeFromRepo.LikeeDeleted = true;

            if (likeFromRepo.LikerDeleted || likeFromRepo.LikeeDeleted)
                _repo.Delete(likeFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception("Error deleting the message");
        }
    }

}
