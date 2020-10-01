using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BST_Projekt.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string City { get; set; }
        public ICollection<PhotoForDetailedDto> Photos { get; set; }


    }
}
