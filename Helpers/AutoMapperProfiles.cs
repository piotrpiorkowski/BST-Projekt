using AutoMapper;
using BST_Projekt.Dtos;
using BST_Projekt.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BST_Projekt.Models;

namespace BST_Projekt.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
    {
        CreateMap<User, UserForPlanerDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));
        CreateMap<User, UserForDetailedDto>()
                 .ForMember(dest => dest.PhotoUrl, opt =>
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url)); ;
        CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();
            CreateMap<UserForRegisterDto, User>();

    }
    }
}
