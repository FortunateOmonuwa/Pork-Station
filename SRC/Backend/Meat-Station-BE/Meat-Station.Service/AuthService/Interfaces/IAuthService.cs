using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Meat_Station.Service.AuthService.Interfaces
{
    public interface IAuthService
    {
        void CreatePasswordHash(string password, out byte[] password_hash, out byte[] password_salt);
        bool VerifyPasswordHash(string password, byte[] hash, byte[] salt);
        string CreateToken(string Id, bool role);
        string CreateRandomVerificationToken();
    }
}
