using Meat_Station.Service.AuthService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Meat_Station.Service.AuthService.Repository
{
    public class AuthService : IAuthService
    {
        public void CreatePasswordHash(string password, out byte[] password_hash, out byte[] password_salt)
        {
            throw new NotImplementedException();
        }

        public string CreateRandomVerificationToken()
        {
            throw new NotImplementedException();
        }

        public string CreateToken(string Id, bool role)
        {
            throw new NotImplementedException();
        }

        public bool VerifyPasswordHash(string password, byte[] hash, byte[] salt)
        {
            throw new NotImplementedException();
        }
    }
}
