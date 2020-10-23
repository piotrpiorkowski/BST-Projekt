
using System;
using System.Collections.Generic;


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
        public virtual ICollection<Photo> Photos { get; set; }
        public virtual ICollection<Message> MessagesSent { get; set; }
        public virtual ICollection<Message> MessagesReceived { get; set; }


    }
}
