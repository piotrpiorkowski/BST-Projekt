﻿
using BST_Projekt.Helpers;
using BST_Projekt.Models;

using System.Collections.Generic;

using System.Threading.Tasks;

namespace BST_Projekt.Data
{
   public interface IBstRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<PagedList<User>> GetUsers(UserParams userParams);
        Task<User> GetUser(int id);
        Task<Photo> GetPhoto(int id);
        Task<Photo> GetMainPhotoForUser(int userId);
            
    }
}
